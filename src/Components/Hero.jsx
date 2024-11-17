import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { heroVideo } from '../utils';
import { smallHeroVideo } from '../utils';

const Hero = () => {

  const [heroSrc,setHeroSrc] = React.useState(window.innerWidth < 760 ? smallHeroVideo: heroVideo );

  const handleVideoSrcSet=()=>{
    if (window.innerWidth < 760){
      setHeroSrc(smallHeroVideo);
    }else{
      setHeroSrc(heroVideo);
    }
  }
  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet);
    return ()=>{
      window.removeEventListener('resize',handleVideoSrcSet);
    }
  },[])
  
  useGSAP(()=>{
    gsap.to('#HeroTitle',{
      opacity: 1,
      delay: 2,
      duration: 3,
    })

    gsap.to('#ButtonDiv',{
      opacity:1,
      y:-50,
      delay: 3,
      duration: 1,
    })
  },[])




  return (
    <section className='mt-40 w-full flex justify-center max-sm:mt-20'>
        <div className="flex-col justify-center items-center w-5/6">
            <h3 className='text-hero-title text-3xl text-center font-bold opacity-0 max-sm:mb-10' id='HeroTitle'>iPhone 15 Pro</h3>
            <video autoPlay muted playsInline key={heroSrc}>
              <source src={heroSrc} type='video/mp4' />
            </video>
            <div className="flex-col justify-center items-center text-center mt-20 opacity-0" id='ButtonDiv'> {/* Added text-center */}
                <button className='bg-buy-blue text-white text-xl py-2 px-5 rounded-3xl hover:bg-black border-blue-600 border-2 hover:text-blue-600'>Buy</button>
                <p className='text-center text-xl mt-5'>From $199/month or $999</p>
            </div>
        </div>
    </section>
  )
}

export default Hero;
