import React from 'react'
import Header from './Header/Header.jsx'
import './Hero.css'
import hero_image from '../img/hero_image.png'
import hero_image_back from '../img/hero_image_back.png'
import Heart from '../img/heart.png'
import Calories from '../img/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';

export const Hero = () => {
 const transition={type:'spring',duration :3}
 const mobile=window.innerWidth<=768 ? true:false;


  return (
    <div className='hero' id="hero">
      <div className='blur hero-blur'></div>
       <div className='left-h'>
        <Header />

        

        <div className='theBestAd'>
          <motion.div
          initial={{left: mobile?'165px':'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'twin'}}
          
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
            {/* // hearo text heading */}
   <div className='heroText'>
      <div><span className='strokeText'>
        Shape </span>
        <span>Your</span>
        </div>
        <div>
        <span> Ideal body</span>
        </div>
        <div>
        <span>IN here we will help you to share and build your ideal body and live up your Life to fullest.</span>
        </div>
        </div>

        {/* figures  */}
        <div className='figures'>
        
        <div>
        <span>
        <NumberCounter end={140} start={100} delay={4} preFix='+'/>
        </span>
        <span> Export coaches</span>
        </div>
        <div>
        <span><NumberCounter end={978} start={928} delay={4} preFix='+'/></span>
        <span> Members joined</span>
        </div>
        <div>
        <span><NumberCounter end={50} start={1} delay={4} preFix='+'/></span>
        <span> Fitness Programs</span>
        </div>
        
        </div>
        {/* // hero buttons  */}

        <div className='heroButtons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
       
        </div>



       </div>
       <div className='right-h'>
        <button className='btn'>Jioin Now</button>

        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
        
        className='heartRate'>
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span> 116 bpm</span>
         </motion.div>
         {/* hero img   */}
         <img src={hero_image} alt="" className='heroImage' />
         <motion.img 
         initial={{right:"12rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
         src={hero_image_back} alt="" className='heroImageBack' />
 
           {/* calories   */}
           <motion.div 
           initial={{right:"37rem"}}
        whileInView={{right:"28rem"}}
        transition={transition}
           className='calories'>
            <img src={Calories} alt=' ' />
            <div>
            <span>Calories Burned</span>
            <span> 220 kcal</span>
           </div>
           </motion.div>


       </div>
    </div>

    
    

    


  )
}
