import React,{useState,useRef} from "react"
import sun from "../assets/images/icon-sun.svg"
import Light from "../components/light"
import { agregarDatos_ } from "../store/action"
import { useDispatch, useSelector } from "react-redux"
import ListadoDark from "./listadoDark"
import axios from "axios"
import Swal from "sweetalert2"

//Valores iniciales de los state
var datoValor=[]


const Dark=()=>{
    const [botonSun,setBotonSun]=useState(false)
    
    const dispatcher=useDispatch();
    //state listado con los resultados de la lista
    const listadoTotal=useSelector(state=>state.listado);
    const agregarDatos=()=>dispatcher(agregarDatos_(datoValor));
    const info=useRef();

    const mostrarLight=()=>{
        
        setBotonSun(true)
        
    }
    
    //Se reciben datos del input y se lleva a data.json
    const recibirDatos=()=>{
        
        var infoValor=info.current.value
        
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


    //Si se pulsa botón se llama al componente Light
    if(botonSun){
        return <Light></Light>
    }else{
    return(
        <div className="dark_container">
    
            <div className="dark_container_title">
                <h1>TODO</h1>
            </div>
            <div className="dark_container_button">
                <button className="boton" onClick={mostrarLight}><img src={sun} className="dark_container_icon" alt="imagen_boton_oscuro"></img></button>
            </div>
            
            <div className="dark_container_input">
                
                <input type="text" className="inputContainer_dark" ref={info}  placeholder="Create a new todo..."></input>
                <div className="dark_container_circle"></div>
                
            </div>
            <div className="dark_tareas">
                <div className="container_tareas_dark">
                    <ListadoDark></ListadoDark>
                </div>
                <div className="dark_btn">
                    <button className="style_btn_dark"onClick={recibirDatos}>Save</button>
                    <button className="style_btn_dark" onClick={mostrarDatos}>All</button>
                    <button className="style_btn_dark" onClick={eliminarDatos}>Clear</button>
                    
                </div>
            </div>
            
            
        </div>
    )
    }
}
export default Dark;

