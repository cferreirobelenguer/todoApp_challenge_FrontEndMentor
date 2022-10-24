import React from "react"
import { useSelector } from "react-redux"


const ListadoDark=()=>{
    
    //state listado con los resultados de la lista
    const listadoTotal=useSelector(state=>state.listado);
    

    return(
        <div className="container_tareas_dark">
                {listadoTotal.map((i)=>{
                    return(
                        <div className="darkTareas">
                            {i}
                        </div>
                    )
                })}
                
            </div>
    )
    
}
export default ListadoDark;