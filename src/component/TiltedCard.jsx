import React, { useRef, useState, useEffect } from "react";

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  scaleOnHover = 1.1,       // desktop scale
  mobileScale = 1.05,       // smaller scale on phones
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}) {
  const ref = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on load
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouse = (e) => {
    if (!ref.current || isMobile) return; // no tilt on mobile
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotateX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotateY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    setRotation({ x: rotateX, y: rotateY });

    if (showTooltip) {
      setTooltip({ x: e.clientX, y: e.clientY, visible: true });
    }
  };

  const handleMouseEnter = () => {
    setScale(isMobile ? mobileScale : scaleOnHover);
    if (isMobile && showTooltip) {
      setTooltip({ x: 0, y: 0, visible: false });
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setScale(1);
    setTooltip((t) => ({ ...t, visible: false }));
  };

  return (
    <figure
      ref={ref}
      className="relative inline-block [perspective:800px] cursor-pointer"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && isMobile && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          Tilt effect is disabled on mobile.
        </div>
      )}

      <div
        className="relative [transform-style:preserve-3d] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="block w-full h-auto object-cover"
        />
        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 flex items-center justify-center text-white ">
            
          </div>
        )}
      </div>

      {showTooltip && tooltip.visible && (
        <figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d]"
          style={{ transform: `translate(${tooltip.x}px, ${tooltip.y}px)` }}
        >
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
