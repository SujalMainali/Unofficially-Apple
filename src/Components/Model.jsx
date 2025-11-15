import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState } from 'react'
import { models } from '../constants'

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({ //This is used to set the required when the icon is clicked
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64', '#F5F4F2'],
    img: '',
  });

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    gsap.to('.modelHeading', {
      opacity: 1,
      duration: 1,
      y: -40,
      scrollTrigger: { // Use lowercase "scrollTrigger"
        trigger: ".modelHeading",
        start: "top 80%", // Adjust this value as needed
        toggleActions: "restart none none reset", // Plays only once on entry
      },
    })
  }, [])

  return (
    <section className='bg-black mt-24 flex flex-col justify-center items-center pl-5 max-sm:mt-10'>
      <h1 className='text-5xl text-gray-400 opacity-0 max-sm:text-3xl max-sm:mt-5 modelHeading'>Take a closer look</h1>

      <div className='flex flex-col items-center mt-5 w-full'>
        <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden'>

        </div>

      </div>
      <div className='flex flex-col justify-center items-center gap-4 mb-20 max-sm:mb-5'>
        <h3 className='text-sm'>{model.title}</h3>
        <div className='flex items-center gap-4'>
          <div className='flex items-center justify-center gap-3 h-12 w-48 bg-gray-700 rounded-full'>
            {models.map((item, index) => (
              <div key={index} className={`h-6 w-6 rounded-full`}
                style={{ backgroundColor: item.color[0] }}
                onClick={() => setModel(item)}></div>
            ))}
          </div>
          <div className='flex bg-gray-700 rounded-full h-10 w-20 justify-center items-center '>
            <div
              className={`p-2 rounded-full cursor-pointer ${(size === 'small') ? 'bg-white text-black' : 'bg-gray-700'}`}
              onClick={() => setSize('small')}>6.1&quot;</div>
            <div
              className={`p-2 rounded-full cursor-pointer ${(size === 'large') ? 'bg-white text-black' : 'bg-gray-700'}`}
              onClick={() => setSize('large')}>6.7&quot;</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model;