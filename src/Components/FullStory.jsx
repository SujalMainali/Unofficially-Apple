import React from 'react'
import { FullStoryVideo } from '../utils'
import { FullStoryImg2,FullStoryImg3 } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef,useState,useEffect } from 'react'

const FullStory = () => {
    const Video=useRef();
    const [playVideo,setPlayVideo]=useState(false);

    useGSAP(()=>{
        gsap.to('#StoryTitle',{
            opacity: 1,
            y:-50,
            scrollTrigger: {
                trigger: "#StoryTitle",
                start: "top 30%", 
                end: "bottom 40%",
                toggleActions: "play none none reverse", // Add toggleActions
            },
        })

        gsap.to('.animateStoryImg',{
            scale: 1,
            scrollTrigger: {
                trigger: ".animateStoryImg",
                start: "top 50%", 
                end: "bottom 80%",
                toggleActions: "play none none reverse", // Add toggleActions
                ease: "power1.inOut",
            },
        })
        gsap.to('.animateStoryDescription',{
            opacity: 1,
            y:-50,
            scrollTrigger: {
                trigger: ".animateStoryDescription",
                start: "top 70%", 
                end: "bottom 90%",
                toggleActions: "play none none reverse", // Add toggleActions
            },
        })
    },[])

    useEffect(() => {
        const videoElement = Video.current;
    
        if (videoElement) {
          // GSAP ScrollTrigger to control video play/pause
          ScrollTrigger.create({
            trigger: videoElement, // Element to observe
            start: "top 80%", // When the top of the video reaches 80% of the viewport
            end: "bottom 20%", // When the bottom of the video leaves 20% of the viewport
            onEnter: () =>{
                videoElement.currentTime = 0; // Reset video to start
                videoElement.play();
            }, // Play when entering
            onLeave: () => videoElement.pause(), // Pause when leaving
            onEnterBack: () => {
                videoElement.currentTime = 0; // Reset video to start
          videoElement.play(); // Play video
            }, // Play when scrolling back up
            onLeaveBack: () => videoElement.pause(), // Pause when scrolling out from the top
             // Optional: adds markers to visualize start and end points
          });
        }
    
      }, []);

    gsap.registerPlugin(ScrollTrigger);
  return (
    <div className='bg-gray-950 mt-40 border border-gray-800'>
        <h1 className='mt-32 text-5xl text-gray-500 opacity-0 ml-10' id='StoryTitle'>Explore The Full Story</h1>
        <div className='flex flex-col justify-center items-center pt-20'>
            <div>
                <h1 className='text-6xl font-bold'>iPhone.</h1>
                <h1 className='text-6xl font-bold'>Forged in titanium.</h1>
            </div>
            <video className='w-3/5 mt-20' ref={Video} muted>
                <source src={FullStoryVideo} type="video/mp4" />
            </video>
            <div className='w-3/5 flex p-0 gap-6 '>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <div className="h-[380px] w-full overflow-hidden"><img src={FullStoryImg2} alt="img2" className='h-full w-full animateStoryImg scale-150'/></div> 
                    <div className='mt-32 text-xl text-gray-500 opacity-0 animateStoryDescription'>
                        <p>iPhone 15 Pro is the first iPhone to</p>
                        <p className='font-bold text-white'>feature an aerospace-grade titanium</p>
                        <p>design,using the same alloy that</p>
                        <p>Spacecrafts use for missions to Mars</p>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                <div className="h-[380px] overflow-hidden "><img src={FullStoryImg3} alt="img3" className='h-full w-full animateStoryImg scale-150'/></div>
                    <div className='mt-32 text-xl text-gray-500 opacity-0 animateStoryDescription'>
                        <p>Titanium has one of the best strength-</p>
                        <p>to-weight rations of any metal, making</p>
                        <p className='font-bold text-white'>these our lightest Pro models ever. You'll</p>
                        <p>notice the difference the moment you</p>
                        <p>pick one up.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>    
  )
}

export default FullStory