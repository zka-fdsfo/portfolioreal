import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const ProjectsHeading = () => {
  const headingRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(headingRef.current, {
      type: "chars",
    });

    gsap.from(split.chars, {
      y: 120,
      opacity: 0,
      stagger: 0.06,
      duration: 1,
      ease: "power4.out",
    });

    return () => split.revert();
  }, []);

  return (
    <h1
      ref={headingRef}
      className="text-[12vw] font-light uppercase tracking-tight text-white overflow-hidden"
    >
      Projects
    </h1>
  );
};

export default ProjectsHeading;
