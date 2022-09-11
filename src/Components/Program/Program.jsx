import React from 'react'
import './Program.css'
import {programsData} from '../../Data/programsData'
import RightArrow from '../../img/rightArrow.png'

export const Program = () => {
  return (
    <div className='programs' id='programs'>
    <div className='programs-header'>
    <span className='strokeText'>Explore our</span>
    <span> Programs</span>
    <span className='strokeText'> to shape you</span>
</div>

<div className='programCategories'>
{programsData.map((program)=>{
    return (
    <div className='category'>
    {program.image}
    <span>{program.heading}</span>
    <span>{program.details}</span>
    
    <div className='joinNow'><span>join now</span><img src={RightArrow} alt='' />
 </div>
    
</div>
    )
})}

</div>
 </div>
  )
}
