import {createSlice} from '@reduxjs/toolkit'

export const notesReducer = createSlice({
    name:'Notes',
    initialState:{
        userDetails:{

        },
        notesDetails:{

        },
        colorCodedetails:{

        },
        recycleBin:[

        ]
    },
    reducers:{
        setnotesDetails:(state,action)=>{
            return{
                ...state,
                notesDetails:action.payload
            }
        },
        setColorCodedetails:(state,action)=>{
            return{
                ...state,
                colorCodedetails:action.payload
            }
        },
        setRecycleBin:(state,action)=>{
            return{
                ...state,
                recycleBin:[...state.recycleBin,action.payload]
            }
        }
    }
})

export const {setnotesDetails,setColorCodedetails,setRecycleBin} = notesReducer.actions;
export default notesReducer.reducer;