import React from "react"
import { useSelector } from "react-redux"


const ListadoDark=()=>{
    
    //state listado con los resultados de la lista
    const listadoTotal=useSelector(state=>state.listado);
    
  
    //Se visualiza la lista
    return(
        <div className="container_tareas_dark">
                {listadoTotal.map((i)=>{
                    return(
                        
                        <div className="darkTareas">
                        
                            <span className="tareaDark" >{i}</span>
                        </div>
                    )
                })}
                
            </div>
    )
    
}
export default ListadoDark;