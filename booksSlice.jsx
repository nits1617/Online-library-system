import {createSlice, nanoid} from '@reduxjs/toolkit'
import {initialBooks} from '../data'

const booksSlice = createSlice({
    name:'books',
    initialState: {
        list: initialBooks
    },
    reducers: {
        addBook: {
            reducer(state, action) {
                state.list.push(action.payload)
            },
            prepare(data){
                return { payload: {id: nanoid(), ...date}}
            }
        }
    }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer