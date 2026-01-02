import React from "react";
import FallingText from "../Aim/FallingText";


const Footer = () => {
  return (
    <footer className="w-full h-full bg-black text-white overflow-hidden">
      {/* TOP SECTION */}
      <div className="px-10 pt-10 pb-20 relative">
        {/* Top bar */}
        <div className="flex lg:justify-between flex-row flex-wrap text-xs mb-2.5 tracking-widest uppercase opacity-80">
          <div>
            <p>Have a project in mind?</p>
            <p>Let's create something amazing!</p>
            <a
              href="#"
              className="underline mt-2 inline-block hover:opacity-100"
            >
              Schedule a call
            </a>
          </div>

          <div className="flex mt-2.5 gap-8 flex-row flex-wrap">
            <a href="#">Dribbble</a>
            
            <a href="#">LinkedIn</a>
      
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* Center email */}
        <div className="text-center mt-24 mb-20">
          <h1 className="text-[5vw] font-light tracking-wide uppercase flex justify-center items-center gap-4">
            HELLO@MZKDESIGN.COM
            <span className="text-3xl">↗</span>
          </h1>
          <div className="h-px bg-white/20 w-full mt-6"></div>
        </div>

        {/* Bottom links */}
        <div className="flex justify-between text-xs opacity-70 mt-16">
          <div>
            <p>+91 9330949229</p>
            <p className="mt-2 leading-relaxed">
              123 CREATIVE STREET <br />
              DESIGN TOWN, INDIA <br />
              110001
            </p>
          </div>

          <div className="space-y-2">
            <p>PORTFOLIO</p>
            <p>ABOUT</p>
            <p>HOME</p>
          </div>

          <div className="space-y-2">
            <p>CAREERS</p>
            <p>CONTACT</p>
          </div>
        </div>

        {/* Footer note */}
        <div className="flex justify-between items-center text-xs opacity-50 mt-16">
          <p>© ALL RIGHTS RESERVED, MZK 2026</p>
          <p>
            LET'S BRING IDEAS TO LIFE <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>
       <div className="w-full  h-64">
        <FallingText
          text="HELLO@MZKDESIGN.COM Let's create amazing projects together"
          highlightWords={["HELLO@MZKDESIGN.COM", "amazing"]}
          trigger="auto"          // options: 'auto', 'scroll', 'click', 'hover'
          backgroundColor="transparent"
          wireframes={false}       // set true if you want debug boxes
          gravity={1}              // falling speed
          mouseConstraintStiffness={0.2}
          fontSize="2rem"
        />
      </div>
      {/* RED-BLACK BRAND STRIP */}
      <div className="bg-red-600 w-full overflow-hidden">
        <h1 className="text-black text-center font-black text-[18vw] leading-none uppercase translate-x-[5%]">
          MZK →
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
