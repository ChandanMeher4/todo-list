import React, { createContext } from "react";
import { useContext } from "react";

const TodoContext = createContext({
    todos:[
        {

        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    Completed: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider