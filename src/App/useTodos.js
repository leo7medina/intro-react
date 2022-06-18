import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {

    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const indexTodo = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(indexTodo, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
          });
        saveTodos(newTodos);
    };

    return {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        sincronizeTodos
    };
}

export {useTodos};