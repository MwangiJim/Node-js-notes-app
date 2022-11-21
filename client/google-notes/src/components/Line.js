import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Line = ({icon,text,id}) => {
    let styles = {
       borderTop:id === 1?'1px solid gray':''
    }
  return (
    <Container style={styles}>
      <FontAwesomeIcon icon={icon}/>
      <h4>{text}</h4>
    </Container>
  )
}

export default Line
let Container = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 padding:15px 8px;
 h4{
    margin:0 1%;
 }
 cursor:pointer;
 :hover{
    background-color:#f4f4f4;
    box-shadow:4px 4px 10px #333;
    border-radius:10px;
 }
`