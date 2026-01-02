import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ProjectsHeading from "./ProjectsHeading";
import TiltedCard from '../component/TiltedCard';

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

const projects = [
  {
    number: "01",
    title: "Mathijs Hanenkamp",
    year: "2023",
    role: "ART DIRECTION\nUI/UX DESIGN\nINTERACTIVE DESIGN",
    image:
      "https://i.pinimg.com/1200x/c2/c1/ee/c2c1ee1bb0d1bdc7ff078286163d6deb.jpg",
  },
  {
    number: "02",
    title: "HUYML Studio",
    year: "2024",
    role: "BRAND IDENTITY\nMOTION DESIGN",
    image:
      "https://i.pinimg.com/736x/b6/7a/18/b67a187371861abb03defaaa1172c0bf.jpg",
  },
  {
    number: "03",
    title: "Editorial",
    year: "2025",
    role: "EDITORIAL\nUI/UX & DEVELOPMENT",
    image:
      "https://i.pinimg.com/736x/c7/68/2d/c7682d1daf50399cec9a4592ccfdd182.jpg",
  },
];

const Project = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const roleRef = useRef(null);
  const imageRef = useRef(null);

  const [active, setActive] = useState(0);

  // 🔒 PIN + SCROLL CONTROL
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${sectionRef.current.scrollHeight}`, // full height dynamically
      pin: pinRef.current,
      scrub: true,
      onUpdate: (self) => {
        const index = Math.min(
          projects.length - 1,
          Math.floor(self.progress * projects.length)
        );
        setActive(index);
      },
    });
  }, []);

  // 🔥 TEXT SPLIT ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      const numSplit = new SplitText(numberRef.current, { type: "chars" });
      const titleSplit = new SplitText(titleRef.current, { type: "words" });
      const roleSplit = new SplitText(roleRef.current, { type: "lines" });

      gsap.from(numSplit.chars, {
        y: 80,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.from(
        titleSplit.words,
        {
          y: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      gsap.from(
        roleSplit.lines,
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      );

      return () => {
        numSplit.revert();
        titleSplit.revert();
        roleSplit.revert();
      };
    });

    return () => ctx.revert();
  }, [active]);

  // 🖼️ IMAGE FADE + SCALE
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [active]);

  return (
    <div className="relative w-full bg-black">
      <ProjectsHeading />

      {/* Pinned Project Section */}
      <section ref={sectionRef} className="relative">
        <div
          ref={pinRef}
          className="h-screen w-full flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between px-5 lg:px-24 "
        >
          {/* LEFT PANEL */}
          <div className="w-[35%] text-white">
            <p className="text-xs opacity-60 mb-4">NO.</p>

            <h1
              key={projects[active].number}
              ref={numberRef}
              className="lg:text-[180px] lg:mt-0 mt-3 text-[20vw] font-light leading-none"
            >
              {projects[active].number}
            </h1>

            <h2
              key={projects[active].title}
              ref={titleRef}
              className="text-3xl mt-6 hidden lg:block"
            >
              {projects[active].title}
            </h2>

            <p className="text-xs opacity-60 mt-4 hidden lg:block">
              {projects[active].year}
            </p>

            <pre
              key={projects[active].role}
              ref={roleRef}
              className="text-xs opacity-60 mt-10 leading-relaxed hidden lg:block"
            >
              {projects[active].role}
            </pre>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-[55%] lg:h-full w-[90%] ml-0 mt-10 flex flex-col justify-center">
            <div className="bg-[#111] rounded-xl shadow-2xl">
                
             

  <TiltedCard
    ref={imageRef}
    imageSrc={projects[active].image} // <-- Pass the image here
    altText={projects[active].title}
    captionText={projects[active].title}
   
    imageHeight="100%"
    imageWidth="100%"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text ">  {projects[active].title}</p>
    }
  />

            </div>

            {/* Mobile content */}
            <div className="lg:hidden mt-10">
              <h2
                key={projects[active].title}
                ref={titleRef}
                className="text-3xl mt-6"
              >
                {projects[active].title}
              </h2>

              <p className="text-xs opacity-60 mt-4">{projects[active].year}</p>

              <pre
                key={projects[active].role}
                ref={roleRef}
                className="text-xs opacity-60 mt-3 leading-relaxed"
              >
                {projects[active].role}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="">
     
      </footer>
    </div>
  );
};

export default Project;
