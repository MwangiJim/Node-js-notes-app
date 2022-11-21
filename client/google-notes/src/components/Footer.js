import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare ,faPaintBrush,faMicrophone,faPhotoFilm,faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setnotesDetails } from '../redux/NotesReducer'

const Footer = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    function NavigateHandler(){
       dispatch(setnotesDetails({}))
      navigate(`/notepannel`)
    }
  return (
    <Bottom>
         <div className='left__side'>
           <FontAwesomeIcon icon={faTrash} className="icons" onClick={()=>navigate(`/recyclebin`)}/>
           <FontAwesomeIcon icon={faCheckSquare} className='icons'/>
           <FontAwesomeIcon icon={faPaintBrush} className='icons'/>
           <FontAwesomeIcon icon={faMicrophone} className='icons'/>
           <FontAwesomeIcon icon={faPhotoFilm} className='icons'/>
         </div>
         <FontAwesomeIcon icon={faPlus} className='plus' onClick={NavigateHandler}/>
       </Bottom>
  )
}

export default Footer

let Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    width:70%;
    z-index:3;
    background:#fff;
    top:90%;
    box-shadow:4px 4px 10px #333;
    border-radius:10px;
    padding:20px 12px;
    .plus{
        bottom:43px;
        position:absolute;
        left:90%;
        background:#fff;
        padding:12px 14px;
        border-radius:50%;
        border:4px transparent;
        color:red;
        font-size:18px;
        cursor:pointer;
        box-shadow:4px 4px 10px #333;
    }
    .left__side{
        display:flex;
        flex-basis:20%;
        justify-content:space-between;
        .icons{
            cursor:pointer;
        }
    }
 }
`