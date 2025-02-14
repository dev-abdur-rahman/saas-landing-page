import { useGSAP } from "@gsap/react";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { twMerge } from "tailwind-merge"
import { gsap } from "gsap";



const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {

  const bgPopularRef = React.useRef(null);

  useGSAP(() => {
    if (bgPopularRef.current) {
      gsap.to(bgPopularRef.current, {
        backgroundSize: "200% 100%",
        duration: 1,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });
    }
  });
  return (
    <section className="py-14 relative bg-gray-100">
      <div className="container mx-auto px-4">
      <div className="head-text">
                <div className="head-txt-top">boost your productivity</div>
                <h2 className="head-txt-h2">A more effective way  <span className='bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>to track progress</span></h2>
                <p className="head-txt-p">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
            </div>
            
            <div className=" flex flex-col lg:flex-row gap-8 mt-10 lg:items-end justify-center items-center">
              {pricingTiers.map(({ title, monthlyPrice, popular, inverse, buttonText, features}, index) => (
                <div key={index} className={twMerge("card", inverse && "bg-black text-white border-black")}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#6F6C90]">{title}</h3>
                    {popular && (
                      <div className="border border-white/20 rounded-xl px-1.5 py-1 text-sm text-white "><span ref={bgPopularRef} className="bg-gradient-to-r from-[#DD7DFF] via-[#E1CD86], via-[#8BCB92], via-[#71C2EF] to-[#3BFFFF] text-transparent bg-clip-text">Popular</span></div>
                    )}
                  </div>
                  <div className="mt-8 flex items-end">
                    <h2 className="text-6xl font-bold tracking-tighter">${monthlyPrice}</h2>
                    <span className="text-[#6F6C90]">/monthly</span>
                  </div>
                  <div className={twMerge("bg-black text-white px-1 py-1 flex items-center justify-center rounded-lg mt-8", inverse && "bg-white text-black")}>
                    <button >{buttonText}</button>
                  </div>
                  <div className="mt-8">
                    <ul className="flex flex-col gap-4">
                      {features.map((features) => (
                        <li className="flex items-center gap-2">
                          <FaCheck />
                          <span>{features}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};

export default Pricing;
