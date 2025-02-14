import React from 'react'
import productImage from '../assets/images/product-image.png'
import pyramidImage from '../assets/images/pyramid.png'
import tubeImage from '../assets/images/tube.png'
import { FaArrowRight } from "react-icons/fa";
import { IoLeafOutline } from "react-icons/io5";
import { GiArcheryTarget } from "react-icons/gi";
import { CiLock } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ProductShowCase = () => {
    const sectionRef = React.useRef(null)
    const pyramidRef = React.useRef(null)
    const tubeRef = React.useRef(null)

    useGSAP(() => (
        gsap.to(pyramidRef.current, {
            y: (i, target) => -target.offsetHeight * 2,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 4
            }
        }),
        gsap.to(tubeRef.current, {
            y: (i, target) => -target.offsetHeight * 2,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 4
            }
        })
    ))
  return (
    <section ref={sectionRef} className='py-24 bg-gradient-to-b from-[#ffffff] to-[#d2dcff] overflow-x-clip'>
        <div className="container mx-auto ">
            <div className='head-text'>
                <div className='head-txt-top'>boost your productivity
                </div>
                <h2 className='head-txt-h2'>A more effective way to <span className='bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text leading-[30px] md:leading-[60px]'>track progress</span></h2>
                <p className='head-txt-p'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
            </div>
            <div className='relative'>
                <img 
                    src={productImage} 
                    alt="product  image" 
                    className='mt-10'
                />
                <img 
                    src={pyramidImage} 
                    ref={pyramidRef}
                    alt="pyramid images"
                    height={262} width={262}
                    className='absolute -right-36 top-40 hidden md:block' 
                />
                <img 
                    ref={tubeRef}
                    src={tubeImage} 
                    alt="tube images"
                    className='absolute -bottom-50 -left-36 hidden lg:block' 
                    height={248} width={248}

                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 px-4 mt-12 mx-auto w-[75%] md:w-[85%] lg:w-full'>
                <div className='box'>
                    <IoLeafOutline className='text-black text-4xl'/>
                    <h2 className='box-h2'>Integration ecosystem</h2>
                    <p className='box-p'>Track your progress and motivate your efforts everyday.</p>
                    <button className='box-btn'>Learn more <FaArrowRight className='text-[16px]'/></button>
                </div>
                <div className='box hover:btn'>
                    <GiArcheryTarget className='text-black text-4xl'/>
                    <h2 className='box-h2'>Integration ecosystem</h2>
                    <p className='box-p'>Track your progress and motivate your efforts everyday.</p>
                    <button className='box-btn'>Learn more <FaArrowRight className='text-[16px]'/></button>
                </div>
                <div className='box hover:btn'>
                    <CiLock className='text-black text-4xl'/>
                    <h2 className='box-h2'>Integration ecosystem</h2>
                    <p className='box-p'>Track your progress and motivate your efforts everyday.</p>
                    <button className='box-btn'>Learn more <FaArrowRight className='text-[16px]'/></button>
                </div>
                <div className='box hover:btn'>
                    <CiBellOn className='text-black text-4xl'/>
                    <h2 className='box-h2'>Integration ecosystem</h2>
                    <p className='box-p'>Track your progress and motivate your efforts everyday.</p>
                    <button className='box-btn'>Learn more <FaArrowRight className='text-[16px]'/></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductShowCase