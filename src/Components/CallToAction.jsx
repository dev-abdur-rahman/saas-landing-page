import React, { useRef } from 'react'
import { FaArrowRight } from "react-icons/fa";
import spring from '../assets/images/spring.png'
import star from '../assets/images/star.png'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const starref = useRef(null)
  const springref = useRef(null)
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.to(starref.current, {
      y: (i, target) => -target.offsetHeight * 1.5,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 2
      }
    })
    gsap.to(springref.current, {
      y: (i, target) => -target.offsetHeight * 1.5,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 2
      }
    })
})
  return (
    <section ref={sectionRef} className='bg-gradient-to-t from-[#D2DCFF] to-[#FFFFFF] overflow-x-clip'>
        <div className="container mx-auto py-33">
          <div className='relative'>
            <div>
                <div className="head-text">
                    <h2 className='head-txt-h2'>Sign up for free today</h2>
                    <p className='head-txt-p'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                </div>
                <div className='flex gap-4 justify-center mt-10'>
                    <button className='btn'>get it for free</button>
                    <button className='flex items-center gap-1 font-bold bg-transparent'>learn more <FaArrowRight className='w-4 h-4 text-black'/></button>
                </div>
              </div>
              <div className=''>
                <img 
                  ref={starref}
                  src={star} 
                  alt="star image" 
                  width={363} height={363}
                  className='absolute lg:top-100 lg:-left-0 hidden md:block md:-top-20 md:-left-60'
                />
              </div>
              <div className=''>
                <img 
                  ref={springref}
                  src={spring} 
                  alt="spring image" 
                  width={363} height={363}
                  className='absolute lg:top-100 lg:-right-0 hidden md:block md:-top-20 md:-right-50'
                />
              </div>
          </div>
        </div>
    </section>
  )
}

export default CallToAction