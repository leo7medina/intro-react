//import logo from './logo.svg';
//import './App.css';
import React from "react";
import './App.css';
import { useTodos } from "./useTodos";
import { TodoHeader } from "./../TodoHeader";
import { TodoCounter } from "./../TodoCounter";
import { TodoSearch } from "./../TodoSearch";
import { TodoList } from "./../TodoList";
import { TodoItem } from "./../TodoItem";
import { TodosLoading } from "./../TodosLoading";
import { Modal } from "./../Modal";
import { TodoForm } from "./../TodoForm";
import { CreateTodoButton } from "./../CreateTodoButton";
import { TodosError} from "./../TodosError";
import { EmptyTodos} from "./../EmptyTodos";

/**const defaultTodos = [
 { text: 'Cortar cebolla', completed: true},
 { text: 'Tomar curso', completed: false},
 { text: 'Filtras datos', completed: false}
];*/

function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo
} = useTodos();

  return (
    <React.Fragment>
        
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
          
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      {/* <TodoList>
          {error && <p>Desesperate, hubo un error</p>}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

          {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)} 
            />
          ))}
      </TodoList> */}
      
      {!!openModal && (
        <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
  
    </React.Fragment>
  );
}

export default App;
