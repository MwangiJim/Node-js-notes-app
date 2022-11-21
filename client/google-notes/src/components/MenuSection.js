import { faBookmark, faCopy, faPersonCirclePlus, faShare, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const MenuSection = () => {
    let[Close,setClose]=React.useState(false);
    let{notesDetails}=useSelector((state)=>state.notesReducer);
    let[Success,setSuccess]=React.useState(false);
   // console.log(notesDetails)

    function ClosePage(){
        setClose((prevState)=>!prevState)
    }
    let styles = {
        display:Close?'none':'block'
    }
   async function DeleteNote(){
   //console.log(notesDetails)
      const response =  await axios.delete(`http://localhost:8080/notes/deleteNote/${notesDetails.Note_Id}`)
      .then((data)=>{
        setSuccess(true)
        alert(`Note id ${notesDetails.Note_Id} deleted Successfully`)
      })
      .catch((err)=>{
      //alert(`Could not delete note with id ${notesDetails.Note_Id}`)
       console.log(err)
      })
      fetch('http://localhost:8080/recycleBin/createRecycleBin',{
        method:'POST',
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify({
          title:notesDetails.Title,
          notes:notesDetails.Todo_Items,
          date:new Date().toLocaleDateString(),
          time:new Date().toLocaleTimeString(),
          datecreated:notesDetails.Date,
          timecreated:notesDetails.Time
        })
      })
    }
    useEffect(()=>{
        setTimeout(()=>{
          setSuccess(false);
        },4500)
    })
  return (
    <Container style={styles}>
        <FontAwesomeIcon icon={faTimesCircle} className="close" onClick={ClosePage}/>
        {Success?<div className='success_section'>
            <h3>Deleted Successfully</h3>
        </div>:''}
      <div className='menus__section'>
        <div className='line' onClick={DeleteNote}>
            <FontAwesomeIcon icon={faTrash}/>
            <label>Delete</label>
        </div>
        <div className='line'>
            <FontAwesomeIcon icon={faCopy}/>
            <label>Make a copy</label>
        </div>
        <div className='line'>
            <FontAwesomeIcon icon={faShare}/>
            <label>Share</label>
        </div>
        <div className='line'>
            <FontAwesomeIcon icon={faPersonCirclePlus}/>
            <label>Collaborator</label>
        </div>
        <div className='line'>
            <FontAwesomeIcon icon={faBookmark}/>
            <label>Labels</label>
        </div>
      </div>
    </Container>
  )
}

export default MenuSection

let Container = styled.div`
 width:100%;
 height:98vh;
 background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));
 top:0;
 left:0;
 position:absolute;
 z-index:4;
 .success_section{
    top:10px;
    right:10px;
    position:absolute;
    border-radius:6px;
    border:3px solid green;
    width:250px;
    text-align:center;
    height:100px;
    padding:7px;
    color:green;
    background-color:#fff;
 }
 .close{
    color:#fff;
    font-size:22px;
    cursor:pointer;
    margin:4px;
 }
 .menus__section{
    top:56%;
    position:relative;
    height:37vh;
    background:#fff;
    .line{
        padding:10px 12px;
        cursor:pointer;
        margin:1% 0;
        border-radius:6px;
        label{
            margin-left:15px;
        }
        :hover{
            background:#f4f4f4;
        }
    }
 }
`