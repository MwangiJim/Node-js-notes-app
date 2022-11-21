import { faArchive, faArrowLeft, faBell,faCommentDots,faGear,faListDots,faMarker, faPaintbrush, faPaintRoller, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import ColorBackground from './ColorBackground'
import MenuSection from './MenuSection'

const NoteComponent = () => {
    let[Success,setSuccess]=React.useState(false);
    let[Error,setError]=React.useState(false)
    let{notesDetails,colorCodedetails}=useSelector((state)=>state.notesReducer);
    const[title,setTitle]=React.useState('')
    const[notes,setNotes]=React.useState('')
    let navigate = useNavigate()

    const HandleNotes=async()=>{
        if(notes,title){
            await fetch('http://localhost:8080/notes/createNote',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    date:new Date().toLocaleDateString(),
                    title:title,
                    notes:notes,
                    time:new Date().toLocaleTimeString()
                })
            })
            navigate(`/`)
        }
    }
    useEffect(() => {
       setTitle(notesDetails.Title)
       setNotes(notesDetails.Todo_Items)
    }, [notesDetails])
    const UpdateNotes=async()=>{
     await fetch(`http://localhost:8080/notes/updateNotes/${notesDetails.Note_Id}`,{
        method:'PUT',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            newTitle:title,
            newNotes:notes,
            newDate:new Date().toLocaleDateString(),
            newTime:new Date().toLocaleTimeString()
        })
     })
     .then((result)=>{
        setSuccess(true)
        //alert("success")
     })
     navigate(`/`)
    }
    const[ColorComponent,setColorComponent]=React.useState(false);

    function ShowColorComponent(){
        setColorComponent((prevState)=>!prevState)
    }
    const[Menu,setMenu]=React.useState(false);
    function ShowMenu(){
      setMenu((prevState)=>!prevState)
    }
  return (
    <Container style={{backgroundColor:colorCodedetails?.Code?colorCodedetails.Code:"#fff"}}>
         {ColorComponent?<ColorBackground/>:''}
         {Menu?<MenuSection/>:''}
       <div className='header'>
         <FontAwesomeIcon icon={faArrowLeft} className='icons' onClick={()=>navigate(`/`)}/>
         <div className='right'>
            <FontAwesomeIcon icon={faMarker} className='icon'/>
            <FontAwesomeIcon icon={faBell} className='icon'/>
            <FontAwesomeIcon icon={faArchive} className='icon'/>
         </div>
       </div>
       <div className='input-box' style={{backgroundColor:colorCodedetails?.Code?colorCodedetails.Code:"#fff"}}>
        <input
         type={'text'}
         placeholder="Title"
         value={title}
         name="title"
         onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea
         placeholder='Note'
         value={notes}
         onChange={(e)=>setNotes(e.target.value)}
         name="notes"
        />
       </div>
       <div className='footer'>
        <div className='left'>
            <FontAwesomeIcon icon={faPlusSquare} className="options"/>
            <FontAwesomeIcon icon={faPaintbrush} className="options" onClick={ShowColorComponent}/>
        </div>
        <small>Edited {notesDetails.Date} {notesDetails.Time}</small>
       <div className='right'>
        {notesDetails.Title?<button onClick={UpdateNotes}>Update</button>:<img src='/Images/send.png' onClick={HandleNotes}/>}
        <img src='/Images/menu.png' onClick={ShowMenu}/>
       </div>
       </div>
    </Container>
  )
}

export default NoteComponent

let Container = styled.div`
position:relative;
 .header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 1%;
    padding:8px 2px;
    .icons{
        cursor:pointer;
    }
    .icon{
        cursor:pointer;
        font-size:17px;
        margin:0 13px;
        cursor:pointer;
    }
 }
 .input-box{
    width:100%;
    height:93vh;
    display:flex;
    justify-content:left;
    flex-direction:column;
    background-color:#fff;
    input{
        height:45px;
        width:90%;
        border:none;
        outline:none;
        font-size:20px;
        font-weight:500;
        background-color:transparent;
    }
    textarea{
        height:60vh;
        resize:none;
        outline:none;
        border:none;
        font-size:15px;
        background-color:transparent;
    }
 }
 .footer{
    display:flex;
    background:#fff;
    justify-content:space-between;
    align-items:center;
    top:88%;
    position:fixed;
    z-index:2;
    box-shadow:2px 2px 4px #333;
    width:70%;
    padding:15px 10px;
    border-radius:8px;
    .options{
        cursor:pointer;
        margin:0 8px;
    }
    .right{
        display:flex;
        justify-content:space-between;
        align-items:center;
        img{
            width:20px;
            height:20px;
            cursor:pointer;
        }
        button{
            background:none;
            border:none;
            font-size:17px;
            text-transform:uppercase;
            box-shadow:2px 2px 3px #333;
            padding:10px 20px;
            border-radius:7px;
            cursor:pointer;
            :hover{
                background-color:#ffc017;
                color:#fff;
            }
        }
    }
 }
`