import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setnotesDetails } from '../redux/NotesReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const PreviewComponent = ({title,todo_items,datecreated,timecreated,id}) => {
  let dispatch=useDispatch()
  const navigate = useNavigate()
  const MakeChanges=()=>{
    navigate(`/notepannel`)
    dispatch(setnotesDetails({
      Title:title,
      Todo_Items:todo_items,
      Date:datecreated,
      Time:timecreated,
      Note_Id:id
    }))
  }
  let[Animation,setAnimation]=React.useState(false);
  function RateNote(){
     setAnimation((prevState)=>!prevState)
  }
  let styles = {
    animation:'moveup 3s linear backwards',
    position:'relative',
  }
  return (
    <Container onClick={MakeChanges}>
        <h1>{title}</h1>
         {todo_items.map((item,i)=>{
          return(
            <p key={i}>{item}</p>
          )
         })}
         <small>{datecreated}</small>
         <br/>
        <div className='footer'>
        <small>{timecreated}</small>
        <FontAwesomeIcon icon={faStar} className="star" onClick={RateNote} style={Animation && styles}/>
        </div>
    </Container>
  )
}

export default PreviewComponent

let Container = styled.div`
 border-radius:8px;
 box-shadow:2px 2px 3px #333;
 padding:10px 7px;
 width:31%;
 height:max-content;
 margin:0 3px;
 p{
  width:250px;
  // max-height:300px;
  // white-space:nowrap;
  // text-overflow:ellipsis;
  // overflow:hidden;
 }
 small{
  font-size:11px;
  color:gray;
 }
 h1{
  font-weight:500;
 }
 cursor:pointer;
 :hover{
  box-shadow:4px 4px 7px #fff;
  background:#000;
  color:#fff;
 }
 .footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  .star{
    font-size:12px;
    cursor:pointer;
  }
 }
`