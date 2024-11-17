import React from 'react';
import { highlightsTags } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import VideoCarousel from './VideoCarousel';

const Highlights = () => { 
  useGSAP(()=>{
    gsap.to('#HighlightTitle',{
      opacity: 1,
      duration: 1,
      y:-50,
    })

    gsap.to('.AnimateLinks',{
      opacity: 1,
      duration: 1,
      y:-50,
      stagger: 0.2
    })
    },[])

  return (
    <section className='bg-highlight-background  pt-32'>
      <div className='flex justify-center items-center gap-60 max-sm:flex-col max-sm:items-start max-sm:gap-5 ml-10'>
        <h1 className='text-5xl text-hero-title opacity-0 max-sm:text-3xl' id='HighlightTitle'>Get the highlights.</h1>
        <div className='flex gap-5'>
          {highlightsTags.map((item, index) => {
              return (
                <div key={index} className='flex justify-center items-center gap-1 text-blue-600 text-2xl opacity-0 AnimateLinks max-sm:text-lg'>
                  <a className='hover:underline cursor-pointer'>{item[0]}</a>
                  {item[1]}
                </div>
              );
          })}
        </div>
      </div>
      <VideoCarousel />
    </section>
  );
};

export default Highlights;
