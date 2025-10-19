import React, { useEffect, useState, Children } from "react";
import { motion, useMotionValue } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 250,
  damping: 60,
};

export const CarouselContainer = ({ children, sideVisibility = 5 }) => {
  if (sideVisibility > 47) {
    sideVisibility = 47;
  }
  const [slideIndex, setSlideIndex] = useState(0);
  const numSlides = Children.count(children);
  const dragX = useMotionValue(0);

  const slideVisibility = Number(sideVisibility);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setSlideIndex((pv) => {
          if (pv === numSlides - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, numSlides]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && slideIndex < numSlides - 1) {
      setSlideIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && slideIndex > 0) {
      setSlideIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      className="relative overflow-hidden py-8"
      style={{
        paddingInline: `${slideVisibility}%`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${slideVisibility}%, black ${
          100 - slideVisibility
        }%, transparent)`,
        maskImage: `linear-gradient(to right, transparent, black ${slideVisibility}%, black ${
          100 - slideVisibility
        }%, transparent)`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      }}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${slideIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab active:cursor-grabbing">
        {Children.map(children, (child, idx) => {
          return (
            <motion.div
              key={idx}
              className="w-full shrink-0 px-4"
              transition={SPRING_OPTIONS}>
              {child}
            </motion.div>
          );
        })}
      </motion.div>

      <Dots
        count={numSlides}
        activeIndex={slideIndex}
        setActiveIndex={setSlideIndex}
      />
    </div>
  );
};

const Dots = ({ count, activeIndex, setActiveIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {[...Array(count)].map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === activeIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
