import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setColorCodedetails } from '../redux/NotesReducer';

const Color = ({color}) => {
 // let[colorcode,setcolor]=React.useState([]);
  let dispatch = useDispatch()

  function ChangeColor(){
      dispatch(setColorCodedetails({
        Code:color
      }))
  }
  return (
    <Colors style={{backgroundColor:color}} onClick={ChangeColor}>
      
    </Colors>
  )
}

export default Color

let Colors = styled.div`
 height:45px;
 width:45px;
 border-radius:50%;
 cursor:pointer;
 box-shadow:2px 2px 3px #333;
`