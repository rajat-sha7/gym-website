import React from 'react'
import './Plans.css'
import { plansData } from '../../Data/plansData'
import whiteTick from '../../img/whiteTick.png'
export const Plans = () => {
  return (
    <div className='plansContainer' id='plans'>
    <div className='blur plans-blur1'></div>
    <div className='blur plans-blur2'></div>
    <div className='programs-header' style={{gap:"2rem"}}>
        <span className='strokeText'>READY TO START</span>
        <span> YOUR JOURNEY</span>
        <span className='strokeText'> NOW WITH US</span>
    </div>

    {/* plans card   */}
      <div className='plans'>
    {plansData.map((plan )=> (
        <div className='plan' key={1}>
        {plan.icon}
        <span>{plan.name}</span>
        <span>$ {plan.price}</span>


        <div className='features'>
            {plan.features.map((feature) => (
               
              <div className='feature'>
                <img src={whiteTick} alt=' '/>
                <span key={1}>{feature}</span>
              </div> 
    ))}
        </div>
        <div><span>see more benefits-> </span>
        </div>
        <button className='btn'>Join Now</button>

        </div>
    ))}

      </div>

    </div>
  )
}
