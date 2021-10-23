//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
 { text: 'Cortar cebolla', completed: true},
 { text: 'Tomar curso', completed: false},
 { text: 'Filtras datos', completed: false}
];

function App() {
  
  const [todos, setTotdos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >=1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    setTotdos(newTodos);
  };

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    setTotdos(newTodos);
  }

  return (
    <React.Fragment>
      
      <TodoCounter total={totalTodos} completed={completedTodos} />
      
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} 
          />
        ))}
        </TodoList>
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
