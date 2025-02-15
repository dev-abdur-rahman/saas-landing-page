import React from 'react'
import logoAcme from '../assets/images/Logo-acme.png'
import logoquantum from '../assets/images/Logo-quantum.png'
import logoecho from '../assets/images/Logo-echo.png'
import logocelestial from '../assets/images/Logo-celestial.png'
import logopulse from '../assets/images/Logo-pulse.png'
import logoapex from '../assets/images/Logo-apex.png'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";



const LogoTricker = () => {
  const logoTricker = React.useRef(null)
  const logos = [logoAcme, logoquantum, logoecho, logocelestial, logopulse, logoapex]

  useGSAP(() => {
    gsap.to(logoTricker.current, {
      x: "-50%",
      duration: 20,
      ease: 'linear',
      repeat: -1,
      delay: 0.5,
    })
  })
  return (
    <div className='py-8 bg-white'>
        <div className="container mx-auto">
          <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <div 
              className='flex gap-14 flex-none whitespace-nowrap'
              ref={logoTricker}
            >
              {logos.concat(logos).map((logo, index) => (
                <img key={index} loading="lazy" src={logo} alt="logo" className='logo-tricker-img' />
              ))}
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default LogoTricker