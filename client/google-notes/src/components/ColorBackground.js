import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useEffect} from 'react'
import styled from 'styled-components'
import Color from './Color'
import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';

const ColorBackground = () => {
    let{colorCodedetails}=useSelector((state)=>state.notesReducer);
    const[containerDisplay,setContainerDisplay] =React.useState(false);
    function HideMenu(){
        setContainerDisplay((prevState)=>!prevState)
    }
    let styles = {
        display:containerDisplay?'none':''
    } 
  return (
    <Container style={styles}>
        <FontAwesomeIcon icon={faTimesSquare} onClick={HideMenu} className="close"/>
     <div className='color_component' style={{backgroundColor:colorCodedetails?.Code?colorCodedetails.Code:"#fff"}}>
        <h3>COLOR</h3>
        <div className='color_bg'>
            <Color
              color="#fff"
            />
           <Color
            color="#f44336"
           />
           <Color
            color="orange"
           />
           <Color
            color="#ffc017"
           />
           <Color
            color="rgb(168, 255, 127)"
           />
           <Color
            color="cyan"
           />
           <Color
            color="aquamarine"
           />
           <Color
            color="rgb(59, 61, 189)"
           />
           <Color
            color="rgb(153, 81, 175)"
           />
           <Color
            color="brown"
           />
           <Color
            color="grey"
           />
           <Color
            color="gray"
           />
        </div>
        <h3>BACKGROUND</h3>
        <div className='picture_bg'>
            <Image
             image='/Images/1.jpg'
            />
             <Image
             image='/Images/2.jpg'
            />
             <Image
             image='/Images/4.jpg'
            />
             <Image
             image='/Images/5.jpg'
            />
             <Image
             image='/Images/6.jpg'
            />
             <Image
             image='/Images/7.jpg'
            />
             <Image
             image='/Images/8.jpg'
            />
             <Image
             image='/Images/9.jpg'
            />
        </div>
     </div>
    </Container>
  )
}

export default ColorBackground
let Container = styled.div`
 height:90vh;
 width:1000px;
 background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));
 top:0;
 left:0;
 position:absolute;
 z-index:4;
 .close{
    cursor:pointer;
    color:#fff;
    font-size:25px;
    margin:3px;
 }
 .color_component{
    background-color:#fff;
    height:30vh;
    position:relative;
    top:64vh;
    width:1000px;
    .color_bg{
        padding:5px;
        margin:1% 0;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .picture_bg{
      padding:2px;
      margin:1% 0;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    h3{
      color:#333;
      font-weight:500;
      font-size:16px;
    }
 }
`