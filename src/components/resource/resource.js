import React, { useState } from 'react';
import './resource.css'

const Resource=(props)=> {

  const [value, setValue] = useState(0);   
  const classes = `resource-div  ${props.resourceClassName}`
  const leftOffset = value < 0 || value > 9 ? -3 : 0
  let left = props.left + leftOffset
      return (
        <div className={classes}>
        <button className='minus' onClick = {() => setValue(value <= props.limit ? props.limit : value - 1)}>
          -
        </button>
        <button className='plus' onClick = {() => setValue(value + 1)}>
          +
        </button>
        <div className='resource-value' style={{top : `${props.top}`, left : `${left}%`}}>{value}</div>
        </div>
        );
  }
 
export default Resource;