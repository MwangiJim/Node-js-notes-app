import { faArrowLeft, faTrash, faTrashRestore, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PreviewComponent from './PreviewComponent'

const RecycleBin = () => {
  const[Bin,setBin]=React.useState([]);
  const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:8080/recycleBin/getDeletedNotes')
        .then((res)=>res.json())
        .then((data)=>{
          //  console.log(data)
            const bin = data.message.map((item)=>{
                return(
                     {
                        date:item.dateDeleted,
                        time:item.timeDeleted,
                        notes:item.Notes,
                        title:item.Title,
                        dateCreate:item.dateCreated,
                        timeCreate:item.timeCreated
                     }
                )
            })
            setBin(bin);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <Container>
        <div className='header'>
            <div className='left'>
                <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={()=>navigate(`/`)}/>
               <h4>Deleted</h4>
           </div>
            <img src='/Images/menu.png'/>
        </div>
        <h3>Deleted Notes will disappear after 14 days</h3>
        {Bin.length > 0?<div className='bin__section'>
           {Bin.map((data)=>{
            return(
                <PreviewComponent
                 title={data.title}
                 datecreated={data.dateCreate}
                 timecreated={data.timeCreate}
                 todo_items={data.notes}
                />
            )
           })}
        </div>:<div className='no_items'>
        <FontAwesomeIcon icon={faTrashRestoreAlt} className="bin"/>
        <p>Hmmmm...No items in your Trash can</p>
            </div>}
    </Container>
  )
}

export default RecycleBin

let Container = styled.div`
 width:100%;
 height:92vh;
 position:relative;
 background:#fff;
 h3{
    font-size:30px;
    font-weight:400;
 }
 .header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:13px 10px;
    .left{
        display:flex;
        justify-content:center;
        align-items:center;
        h4{
            margin:0 4%;
        }
        .arrow{
            cursor:pointer;
        }
    }
    h4{
        font-size:21px;
        font-weight:500;
    }
    img{
        width:15px;
        height:15px;
    }
 }
 .bin{
    color:#f44336;
    font-size:50px;
 }
 .no_items{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    top:40%;
    position:absolute;
    left:40%;
 }
`