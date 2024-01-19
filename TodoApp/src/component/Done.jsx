import React, { useEffect, useState } from 'react'

 const Done = (props) => {
  
  
  
  
  return (
    <div className='done-container'>
        
        {props.completeddata.map((data,i)=>{
          return (
          
           <div className="div" key={i}>
            
            <h3>{data.tit}</h3>
            <p>{data.discr}</p>
            <button className='btn'>-</button>
           
            
            </div>
            
          )
        })}
    </div>
  )
}

export default Done;