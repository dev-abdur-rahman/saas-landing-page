import React from "react";
import { FaArrowRight } from "react-icons/fa";
import cogImage from "../assets/images/cog.png";
import cylinder from "../assets/images/cylinder.png";
import noodle from "../assets/images/noodle.png";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const cogRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const cylinderRef = React.useRef(null);
  const noodleRef = React.useRef(null);

  useGSAP(() => {
    gsap.to(cogRef.current, {
        y: 30,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    gsap.to(noodleRef.current, {
      y: (i, target) => -target.offsetHeight * 2,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", 
        end: "bottom top",
        scrub: 1,
      }
    });
    gsap.to(cylinderRef.current, {
      y: (i, target) => -target.offsetHeight * 2,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", 
        end: "bottom top",
        scrub: 1,
      }
    });
  })

  return (
    <section
      ref={sectionRef}
      className="relative lg:py-16 py-14 pb-20 md:pb-0 md:pt-0 bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px] lg:w-[550px]">
            <div className="text-sm font-bold border border-[#222]/40 inline-flex py-1 px-2 rounded-lg">
              version 2.0 is here
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl tracking-tighter font-bold">
              Pathway to{" "}
              <span className="bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
                productivity
              </span>
            </h1>
            <p className="text-xl tracking-tight text-[#010D3E] mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-4 mt-7">
              <button className="btn">get it for free</button>
              <button className="flex items-center gap-1 font-bold bg-transparent">
                learn more <FaArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative lg:h-[460px]">
            <img
              ref={cogRef}
              src={cogImage}
              alt="cog images"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-right-[350px] lg:right-10"
            />
            <img
              ref={cylinderRef}
              src={cylinder}
              alt="cylinder image"
              width={220}
              height={220}
              className="hidden md:block top-20 -left-32 md:absolute lg:left-8 lg:top-30"
            />
            <img
            ref={noodleRef}
              src={noodle}
              alt="noodle img"
              width={220}
              height={220}
              className="hidden lg:block absolute -bottom-100 -right-10 rotate-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
