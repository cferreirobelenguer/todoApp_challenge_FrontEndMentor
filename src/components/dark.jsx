import React,{useState} from "react"
import sun from "../assets/images/icon-sun.svg"
import Light from "../components/light"

const Dark=()=>{
    const [botonSun,setBotonSun]=useState(false)
    const [datos,setDatos]=useState([])

    const mostrarLight=()=>{
        setBotonSun(true)
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
                
                <input type="text" className="inputContainer_dark" placeholder="Create a new todo..."></input>
                <div className="dark_container_circle"></div>
                
            </div>
        </div>
    )
    }
}
export default Dark;

