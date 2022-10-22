import React,{useState} from "react"
import moon from "../assets/images/icon-moon.svg"
import Dark from "../components/dark"



const Light=()=>{
    const [botonMoon, setBotonMoon]=useState(false)
    const [datos,setDatos]=useState([])

    const mostrarDark=()=>{
        //Cuando se presiona el botón de la luna se pasa al modo dark
        setBotonMoon(true)
        
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
                
                <input type="text" className="inputContainer" placeholder="Create a new todo..."></input>
                <div className="light_container_circle"></div>
                
            </div>
        </div>
    )
    }
}
export default Light;