//import logo from './logo.svg';
//import './App.css';
import React from "react";
//import { TodoProvider } from "../TodoContext";
//import {AppUI} from './AppUI';
import './App.css';

/**const defaultTodos = [
 { text: 'Cortar cebolla', completed: true},
 { text: 'Tomar curso', completed: false},
 { text: 'Filtras datos', completed: false}
];*/

function App() {
  
  const [state, setState] = React.useState('estado compartido');

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter/>
        <TodoSearch/>
      </TodoHeader>

      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
  

  // return (
  //   <TodoProvider>
  //     <AppUI />
  //   </TodoProvider>
  // );
}

function TodoHeader({children}) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({children}) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p>Todocounter</p>;
}

function TodoSearch() {
  return <p>Todo search</p>;
}

function TodoItem({state}) {
  return <p>TodoItem: {state} </p>;
}


export default App;
