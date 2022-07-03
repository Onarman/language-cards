import React from 'react'
import "./Card.css";
import {languages} from "../../helpers/data";
import Item from "../item/Item";

const card = () => {
  return (
    <div className='card-container' >
        <h1 className='card-title' >Languages</h1>
        <div className='cards' >
            {languages.map((item,index)=> {
                return <Item card={item} />
            })}
        </div>
    </div>
  )
}

export default card