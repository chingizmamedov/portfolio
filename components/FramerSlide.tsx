import React, { useRef } from "react";
import { motion, useAnimation, useMotionValue, PanInfo } from "framer-motion";
import useMeasure from "react-use-measure";

type SliderProps = {
  slides: React.ReactNode[];
  slidesToShow?: number;
};
const Slider = ({ slides, slidesToShow = 1 }: SliderProps) => {
  const [ref, bounds] = useMeasure();
  const containerRef = useRef(null);
  const controls = useAnimation();
  console.log("width", bounds.width);
  const itemWith = bounds.width / slidesToShow - 3 * (slidesToShow - 1);
  const rightLimit =
    itemWith * slides.length - bounds.width + 3 * (slides.length - 1) + 20;

  const handleDragEnd = (_: any, info: PanInfo) => {
    const dragDistance = Math.abs(info.offset.x);
    const dragThreshold = window.innerWidth * 0.2; // Adjust this value to control the drag threshold

    if (dragDistance > dragThreshold) {
    } else {
      // Revert to the last position
      console.log("info", info);
      controls.start({ x: 0, transition: { type: "spring" } });
    }
  };

  return (
    <div className="overflow-hidden w-full" ref={ref}>
      <motion.div
        className="flex gap-2"
        drag="x"
        dragConstraints={{
          left: -rightLimit,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
        ref={containerRef}
        animate={controls}
        // dragMomentum={false}
        // dragElastic={false}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            style={{
              width: itemWith,
            }}
            className="flex-initial grow-0 flex-shrink-0"
          >
            {/* Render your slide content here */}
            {slide}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
