import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos : [{id:1,text:'hello'}],
    count : 0
}

export const todoSlice = createSlice({
    name:'todo',
    initialState ,
    reducers:{
        addTodo :(state,action)=>{
            const newTodo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            const id = action.payload
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        increment : (state,action)=>{
            state.count++
        }
    }

})


export const {addTodo,removeTodo,increment} = todoSlice.actions;

export default todoSlice.reducer;