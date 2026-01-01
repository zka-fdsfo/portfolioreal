import React, { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const Box = () => {
  const about = useRef(null);
  const a = useRef(null);
  const l = useRef(null);
  const img = useRef(null);
  const h = useRef(null);
  const heading = useRef(null);
const features = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      heading.current,
      { y: 50, opacity: 0, 
        rotateX:10,
      },
      {
        y: 0,
        opacity: 1,
        rotateX:10,
        scrollTrigger: {
          trigger: a.current,
          start: "top center",
          end: "50% top",
          scrub: true,
          
        },
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      about.current,
      { y: 50 },
      {
        y: 0,
        

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
    gsap.fromTo(
      l.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: a.current,
          start: "-10% center",
          end: "50% top",
          scrub: true,
        },
        stagger: 0.3,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      img.current,
      { y: 0 },
      {
        y: 50,

        scrollTrigger: {
          trigger: a.current,
          start: "bottom center",
          end: "50% top",
          scrub: true,
        },
        stagger: 0.3,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      img.current,
      { scale: 2, y: 0, opacity: 0.8 },
      {
        scale: 1,
        y: 0,
        opacity: 1,

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
    gsap.fromTo(
      h.current,
      { height: "90%" },
      {
        height: "55%",

        scrollTrigger: {
          trigger: a.current,
          start: "top center",
          end: "60% top",
          scrub: true,
        },
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <>
      <div
        ref={a}
        className=" h-screen  overflow-hidden object-cover  z-0 w-screen "
      >
        <div className=" relative h-full w-full  object-cover ">
          <img
            ref={img}
            className=" relative object-cover z-10 h-full w-full"
            src="https://i.pinimg.com/736x/43/c2/b0/43c2b0a3fb0e215e187bd2c551453c1b.jpg"
            alt=""
          />
          <div
            ref={h}
            className=" absolute h-[55%] -mt-2 z-20 top-0 w-full  "
          >
            <section className="relative w-full mt-1 h-full bg-[#000000] overflow-hidden">
              {/* Background glow */}
              <div className="absolute" />

              {/* Content */}
              <div className="relative z-10 w-full mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left text */}
                  <div>
                    <p className="text-[5vw] font-medium sm:text-sm tracking-widest text-red-500 mb-3">
                      ABOUT ME
                    </p>
                    <h1
                      ref={heading}
                      className="text-white font-light leading-tight tracking-tight
             text-4xl sm:text-5xl lg:text-5xl"
                    >
                      I BUILD DIGITAL
                      <br />
                      <span   ref={features} className="font-extralight">
                        EXPERIENCES THAT MATTER
                      </span>
                    </h1>
                  </div>

                  {/* Right text */}
                  <div ref={l} className="text-gray-300 max-w-md">
                    <p ref={l} className="lg:text-[1vw] text-[2vw]">
                      I’m a creative front-end developer focused on building
                      modern, responsive, and visually engaging web experiences.
                    </p>

                    <p
                      ref={l}
                      className="lg:text-[1vw] text-[2vw] lg:mt-0 mt-5"
                    >
                      I combine clean design, smooth animations, and
                      performance-driven code to turn ideas into impactful
                      digital products.
                    </p>
                  </div>
                </div>

                {/* Bottom features */}
                <div className="mt-5  border-t border-white/10 pt-6">
                  <div
                    ref={about}
                    className="flex flex-wrap gap-10 justify-between text-sm text-gray-400"
                  >
                    <span className="hover:text-white transition">
                      Transact
                    </span>
                    <span className="hover:text-white transition">Hold</span>
                    <span className="hover:text-white transition">Earn</span>
                    <span className="hover:text-white transition">Grow</span>
                  </div>
                </div>
              </div>
          
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />
            </section>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Box;
