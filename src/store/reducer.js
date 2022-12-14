//reducer
import {AGREGAR_DATOS } from '../store/types';


// Los state del proyecto

const dataInicial = {
    listado:[],
};


//listado es un array que se actualiza con los datos que recibe por parámetro la función agregarDatos_
const useReducer=(state = dataInicial, action)=>{
    switch(action.type){
        case AGREGAR_DATOS:
            console.log(action.datos)
            return {
                ...state, listado:action.datos
            }
        default:
            return state;
    }

}

export default useReducer;