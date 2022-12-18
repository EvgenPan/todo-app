import { v4 as uuidv4 } from 'uuid';

const defaultState = {
    todos: []
}

export const ADD_TODO = "ADD_TODO"
export const ASYNC_ADD_TODO = "ASYNC_ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const ASYNC_DELETE_TODO = "ASYNC_DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

export const todoReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_TODO:
            const newTodo = {
                id: uuidv4(),
                task:action.payload.task,
                date:action.payload.date,
                completed:false
            };
            const addedTodos = [...state.todos, newTodo];
            return {...state, todos: addedTodos }
        case UPDATE_TODO:
           return {...state}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        default:
            return state
    }
}

export const addCreator = (payload) => ({type: ADD_TODO, payload: payload})
export const updateCreator = (payload) => ({type: UPDATE_TODO, payload: payload})
export const asyncAddCreator = () => ({type: ASYNC_ADD_TODO,})
export const deleteCreator = (payload) => ({type: DELETE_TODO,payload: payload.id})
export const asyncDeleteCreator = () => ({type: ASYNC_DELETE_TODO})
