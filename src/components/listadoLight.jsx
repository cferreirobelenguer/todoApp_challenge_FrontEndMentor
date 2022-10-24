import React from "react"
import { useSelector } from "react-redux"


const ListadoLight=()=>{
    
    //state listado con los resultados de la lista
    const listadoTotal=useSelector(state=>state.listado);
    

    return(
        <div className="container_tareas_light">
                {listadoTotal.map((i)=>{
                    return(
                        <div className="lightTareas">
                            {i}
                        </div>
                    )
                })}
                
            </div>
    )
    
}
export default ListadoLight;