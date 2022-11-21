import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
        <LeftSide/>
        <RightSide/>
    </Container>
  )
}

export default Home
let Container = styled.div`
display:flex;
justify-content:space-between;
height:100vh;
width:100%;
`