"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  // const [iconItems,setIconItems] = useState([])

  useEffect(() => {
    addAnimation();
    // setIconItems([...items,...items])
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };


  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-20 my-4 w-max flex-nowrap justify-between",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, index) => (
            <li
              className="flex justify-center gap-3 items-center flex-col max-w-full relative"
              key={`${item}_${index}_${Math.random()}`}
            >
              <span>
                {item.src}
              </span>
              <p className="text-lg font-medium">{item.name}</p>
            </li>
          ))}
          {items.map((item, index) => (
            <li
              className="flex justify-center gap-3 items-center flex-col max-w-full relative"
              key={`${item}_${Math.random()}_${index}`}
            >
              <span>
                {item.src}
              </span>
              <p className="text-lg font-medium">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="container  min-w-auto flex justify-center items-center py-10 bg-[#151f2b] overflow-x-hidden">
        <div className="container min-w-auto mx-auto flex BrandGradient">
          <motion.div
           initial={{x:0}}
           animate={{x:"-100%"}}
           transition={{ duration:40, repeat:Infinity, ease:"linear"}}
           className="items-center gap-20 flex justify-between flex-shrink-0 pr-16"
           
           >
            {items.map((item, index) => (
              <li
              className="flex justify-center gap-3 items-center flex-col max-w-full relative"
              key={index}
            >
              <span>
                {item.src}
              </span>
              <p className="text-lg font-medium">{item.name}</p>
            </li>
            ))}
          </motion.div>
          <motion.div
           initial={{x:0}}
           animate={{x:"-100%"}}
           transition={{ duration:40, repeat:Infinity, ease:"linear"}}
           className="flex justify-between flex-shrink-0 items-center gap-20 pr-16"
           
           >
            {items.map((item, index) => (
              <li
              className="flex justify-center gap-3 items-center flex-col max-w-full relative"
              key={index}
            >
              <span>
                {item.src}
              </span>
              <p className="text-lg font-medium">{item.name}</p>
            </li>
            ))}
          </motion.div>
        </div>
      </div> */}
    </>
  );
};
