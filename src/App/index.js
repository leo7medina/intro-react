//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import {AppUI} from './AppUI';
import './App.css';

/**const defaultTodos = [
 { text: 'Cortar cebolla', completed: true},
 { text: 'Tomar curso', completed: false},
 { text: 'Filtras datos', completed: false}
];*/

function App() {
  
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
