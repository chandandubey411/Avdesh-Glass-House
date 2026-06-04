import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const Counter = ({ value, duration = 2.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Extract digits and non-digits
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const numericValue = parseInt(numericPart, 10);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 75,
  });

  useEffect(() => {
    if (inView && !isNaN(numericValue)) {
      motionValue.set(numericValue);
    }
  }, [inView, motionValue, numericValue]);

  useEffect(() => {
    if (isNaN(numericValue)) {
      if (ref.current) {
        ref.current.textContent = value;
      }
      return;
    }

    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, numericValue, suffix, value]);

  // Initial text before animate
  return <span ref={ref}>0{suffix}</span>;
};

export default Counter;
