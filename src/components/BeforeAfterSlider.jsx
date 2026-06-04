import { useState, useRef, useEffect } from "react";
import { FaArrowsAltH } from "react-icons/fa";

const BeforeAfterSlider = ({
  beforeImage = "/underConstruction.jpg", // skeleton/facade raw
  afterImage = "/image/hero-glass.jpg", // complete facade
  beforeLabel = "Under Construction",
  afterLabel = "Completed Facade",
  height = "450px"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none cursor-ew-resize"
      style={{ height }}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full width, in the background) */}
      <img
        src={afterImage}
        alt="After Glazing Facade"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0B4F8A]/80 backdrop-blur-md text-white border border-white/10">
        {afterLabel}
      </div>

      {/* Before Image (Clipping container that slides) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Glazing Skeleton"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
        />
        <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0A2540]/80 backdrop-blur-md text-white border border-white/10 whitespace-nowrap">
          {beforeLabel}
        </div>
      </div>

      {/* Sliding Line divider */}
      <div
        className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Drag Handle Button (Glassmorphic) */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#0B4F8A] text-[#0B4F8A] transition-transform active:scale-90 hover:scale-105">
          <FaArrowsAltH size={20} className="animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
