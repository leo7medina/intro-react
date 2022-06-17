import React from "react";
//import {TodoContext} from '../TodoContext';
import './TodoCounter.css'


/*const estilos = {
    color: 'red',
    backgrounColor: 'yellow'
};*/

function TodoCounter({totalTodos, completedTodos, loading}) {

    //const {totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        {/*<h2 style={estilos}>Has Completado 2 de 3 TODOs</h2>*/},
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            Has Completado {completedTodos} de {totalTodos} TODOs
        </h2>
    );
}


export {TodoCounter}; // de esta manera se obliga que la importacion sea del mismo nombre => import {TodoCounter} from './TodoCounter
//export default TodoCounter;  => esta opcion no es tan recomendable ya que la exportacion por defecto se permite importar con cualquier nombre. => import patito from './TodoCounter'