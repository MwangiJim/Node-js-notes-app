import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faLightbulb ,faBell,faPlusCircle,faArchive,faTrashCan,faGear,faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
  import Line from './Line'

const LeftSide = () => {
  return (
   <Container>
    <div className='header'>
        <h3>Cabfee</h3>
        <small>Keep</small>
    </div>
     <Line
      icon = {faLightbulb}
      text="Notes"
     />
      <Line
      icon = {faBell}
      text="Reminder"
     />
      <Line
      icon = {faPlusCircle}
      text="Create new Label"
     />
      <Line
      icon = {faArchive}
      text="Archive"
      id={1}
     />
      <Line
      icon = {faGear}
      text="Settings"
     />
      <Line
      icon = {faQuestionCircle}
      text="Help & feedback"
     />
   </Container>
  )
}

export default LeftSide
let Container = styled.div`
 flex-basis:25%;
 padding:5px 10px;
 small{
    font-size:18px;
    font-weight:500;
 }
 .header{
    display:flex;
    justify-content:left;
    align-items:baseline;
    margin-bottom:6px;
    small{
        margin-left:2px;
    }
    h3{
        font-size:20px;
        font-weight:300px;
        ::first-letter{
            color:#ffc017;
            font-size:30px;
        }
    }
 }
`