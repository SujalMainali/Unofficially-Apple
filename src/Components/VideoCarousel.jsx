import React, { useEffect, useRef } from 'react'
import { videoObjects } from '../utils'
import { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { VideoButtons } from '../utils';


const VideoCarousel = () => {
  const videoRef= useRef([]);  //This creates a reference to the v

  const [video,setVideo] = useState({ //This variable stores the current video being played and its related properties
    isEnd:false, //This is used to load new video when old ends
    startPlay:false,//This is used to start playing video when it is loaded
    videoId:0, //This records the current video to be played
    isLastVideo:false,//This indicates if the current video is the last video
    isPlaying:false,//This indicates if the video is playing
  },[]);

  const [loadedData,setLoadedData] = useState([]); //This property records the loaded video

  const {isEnd,startPlay,videoId,isLastVideo,isPlaying} = video; 

  const [ButtonId,setButtonId] = useState(0);//This is used to display proper button logo

  const [VideoDuration,setVideoDuration] = useState(4);//This controls the duration of the loading animation

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);//To determine the width of the window

  const handleButtonAction = (id) => {//This function controls the play,pause and reload appropriately
    switch(id){
      case 0: //This is triggered in case of play
        setVideo((prevVideo) => ({
          ...prevVideo,
          startPlay: true,
          isPlaying: !prevVideo.isPlaying,
        }));
        break;
      case 1: //This is triggered in case of pause
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPlaying: !prevVideo.isPlaying,
        }));
        break;
      case 2: //THis is triggered in case of reload
        if(windowWidth<=640){
        timeline_smallVideo.current.seek(0);
        }  
        else {
          timeline_video.current.seek(0);
        }
        timeline_reload.current.play();//This is broken
        setVideo((prevVideo) => ({
          ...prevVideo,
          videoId:0,
          isPlaying:true,
          startPlay:true,
          isLastVideo:false
        }));
    }
  };



  useEffect(()=>{ //This useEffect is triggered when the variables in the dependency array change. This will be used to control play pause change of video. 
    if (loadedData.length >= videoObjects.length) { //There are 4 videos so this checks the end of video
      if(isPlaying){//
        setVideoDuration(videoRef.current[(videoId+1<videoObjects.length)?videoId+1:0].duration);
        videoRef.current[videoId].play().catch((err) => console.log("Error playing video:", err));;
          if(windowWidth<=640){
            timeline_smallVideo.current.play(); //This loads the moving video animation
          }
          else{
            timeline_video.current.play(); //This loads the moving video animation
          }
        timeline_loading.current.play(); //This loads the loading animation of the circles
      }
      else{
        videoRef.current[videoId].pause();
        timeline_video.current.pause();
        timeline_loading.current.pause();
      }
    }
  },[startPlay, videoId, isPlaying, loadedData])




  const PlayingRef=useRef(); //This is used to provideo reference to loading animation circles div
  const timeline_video= useRef(gsap.timeline({paused:true})); //This is animation which controls moving of appropriate video
  const timeline_reload=useRef(gsap.timeline({paused:true}));//This is animmation which is used when the video is reloaded
  const timeline_loading=useRef(gsap.timeline({paused:true}));//This is animation which shows loading div
  const timeline_smallVideo=useRef(gsap.timeline({paused:true}));//This is animation which shows loading div




  useGSAP(()=>{
    timeline_video.current
    .to('#VideoContainer',{
      x:-(windowWidth-100),
      delay:3,
      duration:1,
    })
    .to('#VideoContainer',{
      x:-(windowWidth-120)*2,
      duration:1, 
      delay:4,
    })
    .to('#VideoContainer',{
      x:-(windowWidth-180)*3,
      duration:1,
      delay:2,
    });

    timeline_reload.current
    .to('#VideoContainer',{
      x:0,
      duration:3,
    })

    timeline_smallVideo.current
    .to('#VideoContainer',{
      x:-windowWidth,
      delay:3,
      duration:1,
    })
    .to('#VideoContainer',{
      x:-windowWidth*2,
      duration:1, 
      delay:4,
    })
    .to('#VideoContainer',{
      x:-windowWidth*3,
      duration:1,
      delay:2,
    });


  },[])

  useGSAP(()=>{
    const circles=gsap.utils.toArray(PlayingRef.current.children);
    const innerLoader=circles[videoId].querySelector('.inner_loader');
    timeline_loading.current
    .to(PlayingRef.current,{
      width:200,
      duration:0.1, 
    })
    .to(circles[videoId],{
      width:48,
      duration:0.5,
    })
    .to(innerLoader,{
      x:48,
      duration:VideoDuration-1.2,
    })
    .to(innerLoader,{
      x:0,
      duration:0.1,
    })
    .to(circles[videoId],{
      width:12,
      duration:0.5,
    })
},[videoId])
  


  return (
    <div className='overflow-hidden '> {/*This is the container which contains all the videos and the loading animation*/}
        <div className={`flex items-center ml-96 max-sm:-ml-10 `} 
        style={{
          width:windowWidth*4
        }} 
        id='VideoContainer'> {/* Changed to w-full */} {/*This div contains videos and its associated text*/}
            {videoObjects.map((item, index) => {
              
                return( //Here individual videos are rendered
                    
                      <div key={item.id} className='flex-col justify-center items-center  w-1/5 relative mr-24 left-20  '> {/*This is the text of the video*/}
                          <div className="flex flex-col justify-center absolute top-16 left-10 z-20 h-30 max-sm:h-7 max-sm:top-8 max-sm:left-0 ">
                          {item.text.map((textItem, index) => (

                            
                              <p
                                key={index}
                                className=" text-2xl font-bold max-sm:text-xs "
                                // style={{ top: (windowWidth<=640)? `calc(5px +${index}px)`: `calc(30px + ${index * 2}rem) `  }} // Dynamic top using rem
                              
                              >
                                {textItem}
                              </p>
                          
                          ))}
                          </div>
                          <div className='relative w-full  aspect-video overflow-hidden rounded-3xl max-sm:-ml-4'> {/*//This is individual video*/}
                            <video
                            className='w-full h-full object-cover'
                            ref={(el)=>{videoRef.current[index]=el}} //Here the reference of the individual videos is stored in the videoRef list with proper index
                            muted
                            playsInline={true}
                            preload='auto'    
                            onPlay={
                              () => {
                                setVideo((prevVideo) => ({
                                  ...prevVideo,
                                  isPlaying: true,
                                }));
                              }
                            }
                            onLoadedMetadata={
                              () => {
                                setLoadedData((prevLoadedData) => ([
                                  ...prevLoadedData,
                                  item.video
                                ]));
                              }
                            }
                            onEnded={
                              () => {
                                if(index+1<videoObjects.length){
                                  setVideo((prevVideo) => ({
                                    ...prevVideo,
                                    isEnd:false,
                                    videoId:index+1,
                                    startPlay:true,
                                    isPlaying:true,
                                  }));
                                }
                                else{
                                  setVideo((prevVideo) => ({
                                    ...prevVideo,
                                    isLastVideo:true,
                                  }));
                                }
                              }
                            }
                                                 
                            >
                                <source src={item.video} type="video/mp4" />
                            </video>
                          </div>
                      </div>
                      
                )
            })}
            
        </div>
          <div className='flex justify-center'> {/*//This is the loading animation and button*/}
          <div className='flex justify-center mt-10 mb-30 mb-10'>
              <div className='rounded-3xl bg-gray-600 py-1 px-2 h-16 w-40 flex justify-center items-center gap-4 max-sm:w-32 max-sm:h-10' ref={PlayingRef}>
                {videoObjects.map((item,index)=>(
                  <div className='p-0 w-3 h-3 bg-gray-400 rounded-full relative overflow-hidden'>
                    <div className=' h-3 w-12 -left-12 bg-white absolute  top-0 rounded-full inner_loader'></div>
                    
                  </div>
                ))}
        
              </div>

              <div className="flex justify-center items-center ml-8 rounded-full bg-gray-600 h-16 w-16 max-sm:w-10 max-sm:h-10 max-sm:ml-4">
                {
                <button key={ButtonId} onClick={()=>{handleButtonAction(isLastVideo?2:isPlaying?1:0)}} className='text-2xl'>
                  {VideoButtons[isLastVideo?2:isPlaying?1:0]}
                </button>
                }
                
              </div>


          </div>
        </div>
    </div>
  );      
}

export default VideoCarousel

