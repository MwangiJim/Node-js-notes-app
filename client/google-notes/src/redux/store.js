import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./NotesReducer";

const store = configureStore({
    reducer:{
        notesReducer:notesReducer.reducer
    }
})

export default store;