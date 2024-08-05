"use client";
import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  ReactNode
} from "react";
import { testimonials } from "../config";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface TestimonialItemsProps {
  children: ReactNode;
}

export default function TestimonialItems({ children }: TestimonialItemsProps) {
  const containerRef = useRef<HTMLUListElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const goToSlide = (slideIndex: number) => {
    if (containerRef.current) {
      containerRef.current.style.transitionDuration = "400ms";
      setTranslateX(containerRef.current.clientWidth * slideIndex);
      setCurrent(slideIndex);
    }
  };

  const actionHandler = useCallback(
    (mode: "prev" | "next") => {
      if (containerRef.current) {
        containerRef.current.style.transitionDuration = "400ms";
        if (mode === "prev") {
          if (current <= 1) {
            setTranslateX(0);
            setCurrent(Children.count(children));
          } else {
            setTranslateX(containerRef.current.clientWidth * (current - 1));
            setCurrent((prev) => prev - 1);
          }
        } else if (mode === "next") {
          if (current >= Children.count(children)) {
            setTranslateX(
              containerRef.current.clientWidth * (Children.count(children) + 1)
            );
            setCurrent(1);
          } else {
            setTranslateX(containerRef.current.clientWidth * (current + 1));
            setCurrent((prev) => prev + 1);
          }
        }
      }
    },
    [children, current]
  );

  useEffect(() => {
    const transitionEnd = () => {
      if (containerRef.current) {
        if (current <= 1) {
          containerRef.current.style.transitionDuration = "0ms";
          setTranslateX(containerRef.current.clientWidth * current);
        }

        if (current >= Children.count(children)) {
          containerRef.current.style.transitionDuration = "0ms";
          setTranslateX(
            containerRef.current.clientWidth * Children.count(children)
          );
        }
      }
    };

    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, children]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      actionHandler("next");
    }, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandler]);

  const slides = useMemo(() => {
    const childrenArray = Children.toArray(children);
    if (childrenArray.length > 1) {
      let items = childrenArray.map((child, i) => (
        <li key={i} className="w-full flex-shrink-0">
          {child}
        </li>
      ));

      return [
        <li key={childrenArray.length + 1} className="w-full flex-shrink-0">
          {childrenArray[childrenArray.length - 1]}
        </li>,
        ...items,
        <li key={childrenArray.length + 2} className="w-full flex-shrink-0">
          {childrenArray[0]}
        </li>
      ];
    }

    return <li className="w-full flex-shrink-0">{childrenArray[0]}</li>;
  }, [children]);

  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (containerRef.current) {
        if (e.key === "ArrowLeft") {
          if (current <= 1) {
            setTranslateX(0);
            setCurrent(Children.count(children));
          } else {
            setTranslateX(containerRef.current.clientWidth * (current - 1));
            setCurrent((prev) => prev - 1);
          }
        } else if (e.key === "ArrowRight") {
          if (current >= Children.count(children)) {
            setTranslateX(
              containerRef.current.clientWidth * (Children.count(children) + 1)
            );
            setCurrent(1);
          } else {
            setTranslateX(containerRef.current.clientWidth * (current + 1));
            setCurrent((prev) => prev + 1);
          }
        }
      }
    },
    [children, current]
  );

  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  useLayoutEffect(() => {
    if (containerRef.current) {
      setTranslateX(containerRef.current.clientWidth * current);
    }
  }, []);

  return (
    <div className="w-full relative">
      <h2 className="relative text-2xl md:text-4xl font-extrabold mb-20  text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 bg-success text-white">
        TESTIMONIJALI
      </h2>
      <button
        className="absolute top-1/2 outline-none bg-transparent text-white left-1 md:left-4 z-10"
        onClick={() => actionHandler("prev")}
      >
        <MdKeyboardArrowLeft className="text-6xl m-0" />
      </button>
      <button
        className="absolute top-1/2 outline-none bg-transparent text-white right-1 md:right-4 z-10"
        onClick={() => actionHandler("next")}
      >
        <MdKeyboardArrowRight className="text-6xl m-0" />
      </button>

      {/* Slides */}
      <ul
        className="h-full flex"
        ref={containerRef}
        style={{
          transform: `translate3d(${-translateX}px, 0, 0)`
        }}
      >
        {slides}
      </ul>

      {/* Dots */}
      <div className="flex justify-center items-center mt-3 text-center">
        {testimonials.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`mx-2 my-0 cursor-pointer text-xs md:text-lg ${
              current === slideIndex + 1 ? "text-warning-600" : "text-white"
            }`}
            onClick={() => goToSlide(slideIndex + 1)}
          >
            &#11044;
          </div>
        ))}
      </div>
    </div>
  );
}
