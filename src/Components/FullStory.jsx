import { FullStoryVideo } from '../utils'
import { FullStoryImg2, FullStoryImg3 } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef, useEffect, useState } from 'react'

const FullStory = () => {
    const Video = useRef();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to('#StoryTitle', {
            opacity: 1,
            y: -50,
            scrollTrigger: {
                trigger: "#StoryTitle",
                start: "top 50%",
                end: "bottom 60%",
                toggleActions: "play none none reverse", // Add toggleActions
            },
        })

        gsap.to('.animateStoryImg', {
            scale: 1,
            scrollTrigger: {
                trigger: ".animateStoryImg",
                start: "top 50%",
                end: "bottom 80%",
                toggleActions: "play none none reverse", // Add toggleActions
                ease: "power1.inOut",
            },
        })
        gsap.to('.animateStoryDescription', {
            opacity: 1,
            y: -50,
            scrollTrigger: {
                trigger: ".animateStoryDescription",
                start: "top 70%",
                end: "bottom 90%",
                toggleActions: "play none none reverse", // Add toggleActions
            },
        })
        document.fonts.ready.then(() => {
            // 2. Tiny delay for layout
            setTimeout(() => ScrollTrigger.refresh(), 50);
        });
    }, [])


    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const videoElement = Video.current;

        if (videoElement) {
            // GSAP ScrollTrigger to control video play/pause
            ScrollTrigger.create({
                trigger: videoElement, // Element to observe
                start: "top 50%", // When the top of the video reaches 80% of the viewport
                end: "bottom 40%", // When the bottom of the video leaves 20% of the viewport
                onEnter: () => {
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

    return (
        <div className='bg-gray-950 mt-10 border border-gray-800'>
            <h1 className='mt-32 text-5xl text-gray-500 opacity-0 ml-10 max-sm:text-3xl' id='StoryTitle'>Explore The Full Story</h1>
            <div className='flex flex-col justify-center items-center pt-20'>
                <div className='text-6xl font-bold max-sm:text-center max-sm:text-3xl'>
                    <h1 className=''>iPhone.</h1>
                    <h1 className=''>Forged in titanium.</h1>
                </div>
                <video className='w-3/5 mt-20 max-sm:w-4/5 max-sm:mt-5' ref={Video} muted>
                    <source src={FullStoryVideo} type="video/mp4" />
                </video>
                <div className='w-3/5 flex max-sm:w-4/5 max-sm:gap-3 '>
                    <div className='w-full flex justify-center items-center gap-6 '>
                        <div className="h-[380px] w-full overflow-hidden max-sm:h-52"><img src={FullStoryImg2} alt="img2" className='h-full w-full animateStoryImg scale-150' /></div>
                        <div className="h-[380px] w-full overflow-hidden max-sm:h-52"><img src={FullStoryImg3} alt="img3" className='h-full w-full animateStoryImg scale-150' /></div>
                    </div>
                </div>
                {
                    windowWidth > 640 &&
                    (
                        <div className='w-full flex justify-center items-center gap-6 mt-32 text-xl text-gray-500'>

                            <div className='animateStoryDescription'>
                                <p>iPhone 15 Pro is the first iPhone to</p>
                                <p className='font-bold text-white'>feature an aerospace-grade titanium</p>
                                <p>design,using the same alloy that</p>
                                <p>Spacecrafts use for missions to Mars</p>
                            </div>

                            <div className='animateStoryDescription'>
                                <p>Titanium has one of the best strength-</p>
                                <p>to-weight rations of any metal, making</p>
                                <p className='font-bold text-white'>these our lightest Pro models ever. You&apos;ll</p>
                                <p>notice the difference the moment you</p>
                                <p>pick one up.</p>
                            </div>
                        </div>
                    )
                }
                {
                    windowWidth <= 640 && (
                        <div className='w-full mt-20 text-xl text-gray-500 flex flex-col justify-center items-center'>
                            <div className='animateStoryDescription '>
                                <p>iPhone 15 Pro is the first iPhone to</p>
                                <p className='font-bold text-white'>feature an aerospace-grade titanium</p>
                                <p>design,using the same alloy that</p>
                                <p>Spacecrafts use for missions to Mars</p>
                            </div>

                            <div className='animateStoryDescription'>
                                <br />
                                <p>Titanium has one of the best strength-</p>
                                <p>to-weight rations of any metal, making</p>
                                <p className='font-bold text-white'>these our lightest Pro models </p>
                                <p>ever. You&apos;ll notice the </p>
                                <p>difference the moment you</p>
                                <p>pick one up.</p>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    )
}

export default FullStory