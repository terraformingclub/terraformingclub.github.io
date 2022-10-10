import React, { useState } from 'react';
import './resource.css'

import resourcesTable from './../../images/resources-table.jpg'
const Resource=(props)=> {
  const [value, setValue] = useState(0);   
  const classes = `resource-div  ${props.resourceClassName}`
      return (
        <div className={classes}>
        <button className='minus' onClick = {() => setValue(value -1)}>
          -
        </button>
        <button className='plus' onClick = {() => setValue(value + 1)}>
          +
        </button>
        <div className='resource-value'>{value}</div>
        </div>
        );
  }
 
export default Resource;