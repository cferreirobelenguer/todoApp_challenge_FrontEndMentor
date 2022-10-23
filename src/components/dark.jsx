import React,{useState,useRef} from "react"
import sun from "../assets/images/icon-sun.svg"
import Light from "../components/light"
import { agregarDatos_ } from "../store/action"
import { useDispatch, useSelector } from "react-redux"

var datoValor=[]


const Dark=()=>{
    const [botonSun,setBotonSun]=useState(false)
    
    const dispatcher=useDispatch();
    const listadoTotal=useSelector(state=>state.listado);
    const agregarDatos=()=>dispatcher(agregarDatos_(datoValor));
    const info=useRef();
    

    const mostrarLight=()=>{
        setBotonSun(true)
        
    }
    //Se reciben datos de los input de los componentes dark y light y se unifican en un único state
    const recibirDatos=()=>{
        
        const infoValor=info.current.value
        datoValor=infoValor
        agregarDatos(datoValor)

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
            <button onClick={recibirDatos}>Enviar</button>
        </div>
    )
    }
}
export default Dark;

