import { faBars, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import PreviewComponent from './PreviewComponent'

const NotePreviewComponent = () => {
    let[Form,setForm]=React.useState({
        keyword:''
    })
    const HandleInput=(e)=>{
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    useEffect(()=>{
        let searchNotes =async()=>{
            await axios.get(`http://localhost:8080/notes/searchNotes/?id=${Form.keyword}`)
            .catch((err)=>{
                console.log('No search results were yielded')
            })
        }
        return ()=>{
            searchNotes();
        }
    },[1])
    const[foundNotes,setNotes]=React.useState([])
    useEffect(()=>{
       let NotesFetched = async()=>{
        await fetch("http://localhost:8080/notes/getNotes")
        .then((res)=>res.json())
        .then((data)=>{
            let notesDetails = data.message.map((item)=>{
                return(
                    {
                        date:item.dateCreated,
                        notes:item.Notes,
                        title:item.Title,
                        time:item.timeCreated,
                        id:item._id
                    }
                )
            })
            setNotes(notesDetails);
        })
       }
       return ()=>NotesFetched()
    })
   //console.log(foundNotes)

  return (
    <Container>
        <div className='search-bar'>
          <FontAwesomeIcon icon={faBars} className='icon'/>
          <input
            type={'text'}
            placeholder="Search your notes"
            value={Form.keyword}
            name='keyword'
            onChange={HandleInput}
          />
          <FontAwesomeIcon icon={faBoxOpen} className='icon'/>
         <img src='/Images/7.jpg'/>
       </div>
       <div className='preview__notes'>
        {foundNotes.map((data,i)=>{
            return(
                <PreviewComponent
                key={i}
                   title={data.title}
                   todo_items={data.notes}
                   datecreated={data.date}
                   timecreated={data.time}
                   id={data.id}
                />
            )
        })}
       </div>
       <Footer/>
    </Container>
  )
}

export default NotePreviewComponent

let Container = styled.div`
.search-bar{
    padding: 0 5px;
    width:96%;
    display:flex;
    justify-content:space-betwee;
    align-items:center;
    height:45px;
    box-shadow:2px 2px 3px #333;
    border-radius:7px;
    input{
        width:80%;
        height:45px;
        border:none;
        outline:none;
    }
    .icon{
        margin:0 2%;
        cursor:pointer;
    }
    img{
        width:35px;
        height:35px;
        border-radius:50%;
        border:5px solid #ffc017;
    }
 }
 .preview__notes{
    padding:5px;
    width:97%;
    max-height:550px;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        width:4px;
        background-color:#f4f4f4;
        border-radius:8px;
    }
    ::-webkit-scrollbar-thumb{
        width:4px;
        background-color:#333;
        border-radius:8px;
    }
    ::-webkit-scrollbar-track{
        width:4px;
        background-color:#f4f4f4;
        border-radius:8px;
    }
    ::-webkit-scrollbar{
        height:4px;
        background-color:#f4f4f4;
        border-radius:8px;
    }
    ::-webkit-scrollbar-thumb{
        height:4px;
        background-color:#333;
        border-radius:8px;
    }
    ::-webkit-scrollbar-track{
        height:4px;
        background-color:#f4f4f4;
        border-radius:8px;
    }
    flex-flow:column wrap;
    display:flex;
 }
`