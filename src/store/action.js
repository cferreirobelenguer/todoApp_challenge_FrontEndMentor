import {AGREGAR_DATOS } from '../store/types';

//agregarDatos_ recibe por parámetro datoValor que son string de tareas que el usuario introduce en los inputs
export const agregarDatos_=datoValor=>({
    type:AGREGAR_DATOS,
    datos:datoValor
})
