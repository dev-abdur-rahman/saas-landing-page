import { twMerge } from "tailwind-merge";
import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import avatar4 from "../assets/images/avatar-4.png";
import avatar5 from "../assets/images/avatar-5.png";
import avatar6 from "../assets/images/avatar-6.png";
import avatar7 from "../assets/images/avatar-7.png";
import avatar8 from "../assets/images/avatar-8.png";
import avatar9 from "../assets/images/avatar-9.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";


const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];



const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialColumn = ({ testimonials, className, duration = 5 }) => {
  const testRef = React.useRef(null);

  useGSAP(() => {
    gsap.to(testRef.current, {
      translateY: "-50%",
      repeat: -1,
      ease: "linear",
      duration: duration,
    });
  }, []);

  return (
    <div className={twMerge("overflow-hidden h-[700px]", className)}>
      <div ref={testRef} className="flex flex-col gap-6 pb-6">
        {[...testimonials, ...testimonials].map(({ text, imageSrc, name, username }) => (
          <div key={username} className="card">
            <div>{text}</div>
            <div className="flex items-center mt-4 gap-1.5">
              <img src={imageSrc} loading="lazy" alt={name} width={40} height={40} className="rounded-full h-10 w-10" />
              <div>
                <div className="tracking-tight leading-5 font-bold">{name}</div>
                <div className="tracking-tight leading-5">{username}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="relative py-14">
      <div className="container mx-auto px-4">
        <div className="head-text">
          <div className="head-txt-top">Testimonial</div>
          <h2 className="head-txt-h2">What our users say</h2>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]">
          <TestimonialColumn testimonials={firstColumn} />
          <TestimonialColumn testimonials={secondColumn} className="hidden md:block" />
          <TestimonialColumn testimonials={thirdColumn} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
