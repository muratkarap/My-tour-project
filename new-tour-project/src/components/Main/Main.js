import "./Main.scss";
import React from 'react'
import {data} from "../../helper/data";
import Card from "./Card"

const Main=() => {
    
  return (
    <div className='card-container'>
     {data.map((item,index)=>(<Card {...item} key={index}/>))}
    
    </div>
  )
}

export default Main;
