import React from 'react'
import "./Item.css";
import { useState } from 'react';

const Item = ({card}) => {
    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(!show)
    }
    const {name,img,options} = card;
  return (
    <div className='item-container' onClick={handleClick}>

        {show ? <div>
            <img className='item-img' src={img} alt="img" />
            <h3 className='item-title'>{name}</h3>
        </div> : <ul className='list'>
            {options.map((element,index) => {
                return(
                    <li key={index}>{element}</li>
                )
            })}
        </ul>}

        
        
        
    </div>
  )
}

export default Item