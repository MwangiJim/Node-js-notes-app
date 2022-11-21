import React from 'react'
import styled from 'styled-components'
import {BrowserRouter,Routes,Route,Link, useNavigate} from 'react-router-dom'
import NotePreviewComponent from './NotePreviewComponent'
import NoteComponent from './NoteComponent'
import RecycleBin from './RecycleBin'

const RightSide = () => {
  return (
    <Container>
       {/**Notes created */}
       <div className='section__preview'>
       <BrowserRouter>
         <Routes>
          <Route path='/recyclebin' element={<RecycleBin/>}></Route>
            <Route path='/notepannel' element={<NoteComponent/>}></Route>
            <Route path='/' element={<NotePreviewComponent/>}></Route>
         </Routes>
       </BrowserRouter>
       </div>
    </Container>
  )
}

export default RightSide
let Container = styled.div`
 flex-basis:75%;
 padding:5px 10px;
 .section__preview{
  width:100%;
  height:92vh;
 }
`