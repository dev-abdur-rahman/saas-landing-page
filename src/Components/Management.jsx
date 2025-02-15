import React, { useEffect } from 'react'
import cubeHexil1 from '../assets/images/cube-helix-1.png'
import cubeHexil2 from '../assets/images/cube-helix-2.png'
import { gsap } from 'gsap'

const Management = () => {

    const cubeHexil1i = React.useRef(null)
    const cubeHexil2i = React.useRef(null)

    useEffect (() => {
        gsap.to(cubeHexil1i.current, {
            rotate: -360,
            duration: 40,
            ease: 'linear',
            repeat: -1,
            delay: 0.5,
        })
        gsap.to(cubeHexil2i.current, {
            rotate: -360,
            duration: 40,
            ease: 'linear',
            repeat: -1,
            delay: 0.5,
        })
    },[])
  return (
    <section className='relative py-16'>
        <div className="container mx-auto px-4">
            <div className="head-text">
                <div className="head-txt-top">everythng you need</div>
                <h2 className="head-txt-h2">Streamlined for easy <span className='bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>management</span></h2>
                <p className="head-txt-p">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
            </div>
            <div className='py-6 text-center'>
                <div className='flex flex-col lg:flex-row gap-4 items-center justify-center '>
                    <div className='cube-hexile p-10 shadow-lg'>
                        <div className='w-[329px] h-[329px] mx-auto '>
                            <img 
                                src={cubeHexil1} 
                                alt="cube hexil1"
                                className='object-cover'
                                ref={cubeHexil1i}
                            />
                        </div>
                        <div className='py-4 w-[329px]'>
                            <h3 className='text-2xl font-bold mb-1'>Integration ecosystem</h3>
                            <p >Enhance your productivity by connecting with your favorite tools, keeping all your
                            essentials in one place.</p>
                        </div>
                    </div>
                    <div className='cube-hexile p-10 shadow-lg'>
                        <div className='w-[329px] h-[329px] mx-auto '>
                            <img 
                                src={cubeHexil2} 
                                alt="cube hexil1"
                                className='object-cover'
                                ref={cubeHexil2i}
                                loading="lazy"
                            />
                        </div>
                        <div className='py-4 w-[329px]'>
                            <h3 className='text-2xl font-bold mb-1'>Integration ecosystem</h3>
                            <p >Enhance your productivity by connecting with your favorite tools, keeping all your
                            essentials in one place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Management