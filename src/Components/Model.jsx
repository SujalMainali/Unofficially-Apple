import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState } from 'react'
import * as THREE from 'three'
import ModelView from './ModelView'
import { models } from '../constants'

const Model = () => {
  const [size,setSize] = useState('small');
  const [model,setModel] = useState({
    title:'iPhone 15 Pro in Natural Titanium',
    color:['#8F8A81','#FFE7B9','#6F6C64','#F5F4F2'],
    img:'',
  });

  const cameraControlSmall=useRef();
  const cameraControlLarge=useRef();

  const small=useRef(new THREE.Group())
  const large=useRef(new THREE.Group())

  const [smallRotation,setSmallRotation]= useState(0);
  const [largeRotation,setLargeRotation]= useState(0);

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(()=>{
    gsap.to('.modelHeading',{
      opacity: 1,
      duration: 1,
      y:-40,
      scrollTrigger: { // Use lowercase "scrollTrigger"
        trigger: ".modelHeading",
        start: "top 80%", // Adjust this value as needed
        toggleActions: "restart none none reset", // Plays only once on entry
      },
    })
  },[])

  return (
    <section className='bg-black mt-24 flex flex-col justify-center items-center 
    max-sm:items-start pl-5 max-sm:mt-10'>
      <h1 className='text-5xl text-gray-400 opacity-0 max-sm:text-3xl modelHeading'>Take a closer look</h1>

      <div className='flex flex-col items-center mt-5'>
        <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden'>
          <ModelView
            index={1}
            groupRef={small}
            gsapType='view1'
            controlRef={cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
          />
          <ModelView
            index={2}
            groupRef={large}
            gsapType='view2'
            controlRef={cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
          />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 mb-20'>
        <h3 className='text-sm'>{model.title}</h3>
        <div className='flex items-center gap-4'>
          <div className='flex items-center justify-center gap-3 h-12 w-48 bg-gray-700 rounded-full'>
            {models.map((item,index)=>(
              <div key={index} className={`h-6 w-6 rounded-full`} 
              style={{backgroundColor:item.color[0]}}
              onClick={()=>setModel(item)}></div>
            ))}
          </div>
          <div className='flex bg-gray-700 rounded-full h-10 w-20 justify-center items-center '>
            <div 
            className={`p-2 rounded-full cursor-pointer ${(size==='small')?'bg-white text-black':'bg-gray-700'}`}
            onClick={()=>setSize('small')}>6.1"</div>
            <div 
            className={`p-2 rounded-full cursor-pointer ${(size==='large')?'bg-white text-black':'bg-gray-700'}`}
            onClick={()=>setSize('large')}>6.7"</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model;