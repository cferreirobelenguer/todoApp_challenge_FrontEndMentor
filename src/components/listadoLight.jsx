import React from "react"
import { useSelector} from "react-redux"


const ListadoLight=()=>{
    
    //state listado con los resultados de la lista
    const listadoTotal=useSelector(state=>state.listado);


    //Se visualiza la lista
    return(

        <div className="container_tareas_light">
                {listadoTotal.map((i)=>{
                    return(
                        <div className="lightTareas">
                            <span className="tareaLight" >{i}</span>
                        </div>
                    )
                })}
                
            </div>
    )
    
}
export default ListadoLight;