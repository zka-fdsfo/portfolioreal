import React, { useRef } from "react";
import Center from "../home/Center";
import Bottom from "../home/Bottom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const con = useRef(null);
  const c = useRef(null);
  const m = useRef(null);
  const img = useRef(null);
  const b = useRef(null);
  const overlay = useRef(null);

  useGSAP(() => {
      const tl = gsap.timeline({
    scrollTrigger: {
      trigger: con.current,
      start: "60% 60%",
      end: "bottom top",
      scrub: true,
    },
  });

  // IMAGE SCALE
  tl.fromTo(
    img.current,
    { scale: 1 },
    { scale: 3, ease: "none" },
    0
  );

  // GRADIENT FADE IN
  tl.fromTo(
    overlay.current,
    { opacity: 0 },
    { opacity: 1, ease: "none" },
    0
  );
    gsap.fromTo(
      m.current,
      { scale: 1,  borderRadius: "0px" ,
          backgroundColor: "#000000",
      },
      {
        
        scale: 0.8,
        borderRadius: "50px",
          backgroundColor: "#00000",
        scrollTrigger: {
          trigger: con.current,
          start: "60% 60%",
          end: "bottom top",
          scrub: true,
          
        },
      }
    );
    gsap.fromTo(
      img.current,
      { scale: 1,  
        

       
      },
      {
        
        scale: 3,
       
        scrollTrigger: {
          trigger: con.current,
          start: "60% 60%",
          end: "bottom top",
          scrub: true,
        
          
        },
      }
    );
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      con.current,
      { borderRadius: "0px", backgroundColor: "#160000" },
      {
        backgroundColor: "#160000",
        scrollTrigger: {
          trigger: m.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
         
        },
      }
    );

  }, []);
   useGSAP(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    c.current,
    {
      opacity:0,
      rotateY: -50,
      scale: 0.3,
      transformPerspective: 1000,
      duration: 0.9,
    },
   {
    opacity:1,
    rotateY: 0,
    scale: 1,
    duration: 0.9,
    ease: "power2.out",
  });
}, []);

  useGSAP(() => {
    gsap.fromTo(
      b.current,
      {  opacity: 0,
        y:20,
       },
      {
        
        opacity: 1,
         y:0,
         direction:0.18,
      
      }
    );

  }, []);
  return (
    <>
      <div ref={con} className="flex justify-center items-center h-screen w-screen overflow-hidden   ">
        
        <div ref={m} className="flex relative  justify-center items-center h-screen w-screen overflow-hidden   " >
    <div className=" relative object-cover h-full w-full opacity-20 ">
          <img ref={img} className="object-cover h-full w-full " src="https://i.pinimg.com/736x/9d/25/8c/9d258c9b7e317635bb2407a6e1a0e78a.jpg" alt="" />
            <div
    ref={overlay}
    className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"
  />
        </div>
        <div className=" absolute top-0 h-full w-full " >
          <div ref={c}>
      <Center />
          </div>
         <div ref={b}>
          <Bottom />
           </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
