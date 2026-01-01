import React, { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const Experience = () => {
  const m = useRef(null);
  const l = useRef(null);
  const r = useRef(null);
  const e = useRef(null);
  useGSAP(() => {
    // Left word
    gsap.fromTo(
      l.current,
      { x: -120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: m.current,
          start: "top center",
          end: "60% top",
          scrub: true,
        },
        ease: "power3.out",
      }
    );

    // Right word
    gsap.fromTo(
      r.current,
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: m.current,
          start: "top center",
          end: "60% top",
          scrub: true,
        },
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      e.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: m.current,
          start: "top center",
          end: "60% top",
          scrub: true,
        },
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div ref={m} className="h-screen w-screen">
      <div className="m-20 lg:mt-50 h-full font-[f1] font-extrabold flex flex-col">
        <h1
          ref={l}
          className="uppercase font-medium leading-[12vw] text-[10vw]"
        >
          Crafting
        </h1>
        <div   ref={r} className="flex items-center  justify-end ">
             <img
              className="lg:h-30 lg:w-50 w-[20vw] h-[10vw] object-cover rounded-full"
              src="https://i.pinimg.com/736x/eb/cf/91/ebcf91dc79b7e61788d56b1f3847e639.jpg"
              alt=""
            />
          <h1
          
            className="uppercase font-medium leading-[12vw]  text-[10vw] text-right "
          >
            Digital
           
          </h1>
        </div>

        <h1
          ref={e}
          className="uppercase font-medium leading-[12vw] text-[10vw]"
        >
          Experiences
        </h1>
      </div>
    </div>
  );
};

export default Experience;
