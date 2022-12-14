import React,{useState,useRef} from "react"
import moon from "../assets/images/icon-moon.svg"
import Dark from "../components/dark"
import { agregarDatos_ } from "../store/action"
import { useDispatch, useSelector } from "react-redux"
import ListadoLight from "./listadoLight"
import axios from "axios"
import Swal from "sweetalert2"

//Valores iniciales de los state
var datoValor=[]



const Light=()=>{
    const [botonMoon, setBotonMoon]=useState(false)
    
    const dispatcher=useDispatch();
    //state listado con los resultados de la lista
    const listadoTotal=useSelector(state=>state.listado);
    const agregarDatos=()=>dispatcher(agregarDatos_(datoValor));
    const info=useRef();
    
    

    const mostrarDark=()=>{
        //Cuando se presiona el botón de la luna se pasa al modo dark
        setBotonMoon(true)
        
        
    }
    //console.log("botonMoon: "+botonMoon)
    //Se reciben datos del input y se lleva a data.json
    const recibirDatos=()=>{
        
        const infoValor=info.current.value
        
        axios.post("http://localhost:5000/add/",{
            data:infoValor
        })
        .then(res=>{
            console.log(res)
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your task has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        
    }

    const mostrarDatos=()=>{
        axios.get(
            "http://localhost:5000/list/"
        )
        .then(res=>{
            datoValor=res.data
            agregarDatos(datoValor)
        })
        console.log(listadoTotal)
    }
    
    
    const eliminarDatos=()=>{
        var infoValor=info.current.value
        axios.delete(
            "http://localhost:5000/delete/"+infoValor
        )
        .then(res=>{
            console.log(res.data)
            
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your task has been deleted',
            showConfirmButton: false,
            timer: 1500
        })
    }

    //Si se pulsa el botón se llama al componente Dark
    if(botonMoon){
        return <Dark></Dark>
    }else{
    return(
        
            <div className="light_container">
    
                <div className="light_container_title">
                    <h1>TODO</h1>
                </div>
                <div className="light_container_button">
                    <button className="boton" onClick={mostrarDark}><img src={moon} className="light_container_icon" alt="imagen_boton_claro"></img></button>
                </div>
            
                <div className="light_container_input">
                
                    <input type="text" className="inputContainer" ref={info}  placeholder="Create a new todo..."></input>
                    <div className="light_container_circle"></div>
                </div>
                <div class="light_tareas">
                    <div className="container_tareas_light">
                        <ListadoLight></ListadoLight>
                    </div>
                    <div className="light_btn">
                        <button className="style_btn" onClick={recibirDatos}>Save</button>
                        <button className="style_btn" onClick={mostrarDatos}>All</button>
                        <button className="style_btn" onClick={eliminarDatos}>Clear</button>
                        
            
                    </div>
            </div>
            </div>
        
    )
    }
}

export default Light;