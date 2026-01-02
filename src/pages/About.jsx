import React, { useRef } from "react";
import pro1 from "../assets/pro1.png";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import Services from "./Services";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const heading = useRef(null);
  const features = useRef(null);
  const img = useRef(null);
  const imgpro = useRef(null);
  const a = useRef(null);
  const desc = useRef(null);
  const ap = useRef(null);
  const apm = useRef(null);

  useGSAP(() => {
    gsap.from(desc.current.children, {
      y: -80, // 👈 from above
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: desc.current,
        start: "top 85%",
        toggleActions: "play nono nono reverse",
      },
    });
    gsap.fromTo(
      ap.current,
      { opacity:0},
      {
      opacity:2,

        scrollTrigger: {
          trigger: apm.current,
          start: "20% center",
          end: "25% top",
          scrub: true,
         
        },
        stagger: 0.3,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      img.current,
      { scale: 3 },
      {
        scale: 1,

        scrollTrigger: {
          trigger: a.current,
          start: "top center",
          end: "50% top",
          scrub: true,
        },
        stagger: 0.3,
        ease: "power2.out",
      }
    );
    const isMobile = window.innerWidth < 768;
    gsap.fromTo(
      imgpro.current,
      {
    // width: isMobile ? "20vw" : "40vw",
    // height: isMobile ? "20vh" : "40vh",
    borderRadius: "50%",
  },
     
      {
        width: "100%",
height: "110dvh",
 bottom: 0,

        borderRadius: "0px",
        scrollTrigger: {
          trigger: a.current,
          start: isMobile ? "50% center" :"40% center",
          end: "45% top",
          scrub: true,
         
        },
        ease: "power2.out",
      }
    );

    const split = new SplitText(heading.current, {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      y: 120,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: heading.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => split.revert();
  }, []);
  return (
    <div className=" lg:h-[180vh] h-[150vh] w-screen  relative flex bg-red-950/50 justify-center overflow-hidden">
      <div ref={a} className="w-full h-full relative">
        <video
          ref={img}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://v1.pinimg.com/videos/iht/expMp4/5d/f0/c9/5df0c93213adc05ec8c1159c07206786_720w.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b   flex  flex-col justify-center from-[#160000] to-transparent z-10" />
        <div className="flex z-30 flex-col mt-20 ml-5 text-left absolute top-0">
          <p
            ref={heading}
            className="text-[5vw] sm:text-sm font-medium text-red-500 mb-3"
          >
            ABOUT ME
          </p>

          <h1
            ref={heading}
            className="text-white font-[f1] font-bold text-[8vw] lg:text-[6vw] 
             leading-[8vw] lg:leading-[6vw] overflow-hidden"
          >
            <span className="block">I BUILD DIGITAL</span>

            <span className="block ml-10">
              <span ref={features} className="block">
                EXPERIENCES THAT MATTER
              </span>
            </span>
          </h1>

          <div className=" h-[0.5px] w-full bg-white/50 mt-6"></div>
          <p className="text-[2vw] sm:text-sm font-medium text-white/50 mt-3">
            ABOUT ME
          </p>

          <div
            ref={desc}
            className="text-white uppercase font-[f1] lg:text-[2vw] mt-5 
             leading-[4vw] lg:leading-[2vw] font-bold 
             ml-[30%] lg:ml-[40%] overflow-hidden mr-5"
          >
            <span className="block text-gray-400 mb-2.5">
              I’m a creative web developer focused on crafting visually striking
              and highly interactive digital experiences.
            </span>

            <span className="block">
              Blending modern design, smooth animations, and clean code, I turn
              ideas into engaging products that feel intuitive, fast, and
              memorable.
            </span>
          </div>
          <div ref={apm} className="relative bottom-0 h-screen w-screen mt-10 -ml-3.5 ">
            {/* Gradient overlay */}

            {/* <Services /> */}

            <div ref={ap} className="absolute  w-full inset-0 z-40 bg-gradient-to-t from-black via-[#1f0000bb] to-transparent">
              <div className="relative flex flex-col mt-[100vw] md:m-5 md:mt-[60vw] lg:mt-[5%]">

              <h1 className=" font-[f1] text-[8vw] mx-10 font-bold uppercase   ">What I Do</h1>
              <Services />
              </div>
             
            </div>

            {/* Image */}
            <img
  ref={imgpro}
  src={pro1}
  alt=""
  className="absolute lg:-top-[20%] z-30 h-34 w-34 object-cover rounded-full mx-auto my-auto"
/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
