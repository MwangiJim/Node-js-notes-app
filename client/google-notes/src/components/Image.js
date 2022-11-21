import React from 'react'
import styled from 'styled-components'

const Image = ({image}) => {
  return (
    <Container>
        <img src={image}/>
    </Container>
  )
}

export default Image
let Container = styled.div`
 img{
    width:45px;
    height:45px;
    cursor:pointer;
    border-radius:50%;
    object-fit:cover;
 }
`