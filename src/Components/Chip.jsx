import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { FrameImg,FrameVideo,ChipImg } from '../utils'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const Chip = () => {
    const videoRef=useRef(null)

    useEffect(() => {
        const videoElement = videoRef.current;
    
        if (videoElement) {
          // GSAP ScrollTrigger to control video play/pause
          ScrollTrigger.create({
            trigger: videoElement, // Element to observe
            start: "top 30%", // When the top of the video reaches 80% of the viewport
            end: "bottom 40%", // When the bottom of the video leaves 20% of the viewport
            onEnter: () =>{
                videoElement.currentTime = 0; // Reset video to start
                videoElement.play();
            }, // Play when entering
            onEnterBack: () => {
                videoElement.currentTime = 0; // Reset video to start
          videoElement.play(); // Play video
            }, // Play when scrolling back up
          });
        }
    
      }, []);

    useGSAP(()=>{
        gsap.to('#ChipImg',{
            scale: 0.75,
            opacity: 1,
            scrollTrigger: {
                trigger: "#ChipImg",
                start: "top 30%", 
                end: "bottom 90%",
                toggleActions: "play none none reverse", // Add toggleActions
            },
            ease: "power1.inOut"
        })
        gsap.to('#ChipText',{
            opacity: 1,
            y:-50,
            scrollTrigger: {
                trigger: "#ChipText",
                start: "top 70%", 
                end: "bottom 90%",
                toggleActions: "play none none reverse", // Add toggleActions
            },
            ease: "power1.inOut"
        })
    },[])
    
    gsap.registerPlugin(ScrollTrigger);
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
        <img src={ChipImg} alt="" className=' opacity-0 mb-10' id='ChipImg'/>
        <div className='text-center text-7xl font-bold mb-10'>
            <h1>A17 Pro chip.</h1>
            <h1>A monster for gaming</h1>
        </div>
        <p className='text-2xl text-zinc-600 mb-20'>It's here. The biggest redesign in the history of Apple GPUs.</p>
        <div className='relative w-full h-[850px]' id='ChipVideoDiv'>
            <img src={FrameImg} className='absolute top-0 left-80'></img>
            <video className='absolute top-[32px] left-[350px] -z-10 scale-[1] rounded-3xl' ref={videoRef}  muted autoPlay>
                <source src={FrameVideo} type="video/mp4" />
            </video>
        </div>

        <div className='flex justify-center items-center gap-20 text-xl text-zinc-600 opacity-0 mb-32' id='ChipText'>
            <div>
                <p>A17 Pro is an entirely new class of iPhone chip that</p>
                <p>delivers our best graphic performance by far.</p>
                <p className='text-white font-bold'>Mobile games will look and feel so immersive, with </p>
                <p>incredibky detailed environments and characters</p>
            </div>
            <div>
                <p>New</p>
                <p className='text-5xl font-bold text-white'>Pro-class GPU</p>
                <p>with 6 cores</p>
            </div>
        </div>

    </div>
  )
}

export default Chip