import { useEffect, useRef, useState } from "react";

export function useHeaderScroll({
  downThreshold = 150,
  upThreshold = 20
} = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const scrollDelta = useRef(0);
  const headerHeight = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerHeight.current = headerRef.current.offsetHeight;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 0);

      // Scrolling down
      if (delta > 0) {
        scrollDelta.current += delta;
        if (
          scrollDelta.current > downThreshold &&
          currentScrollY > headerHeight.current
        ) {
          setIsVisible(false);
          scrollDelta.current = 0;
        }
      }
      // Scrolling up
      else if (delta < 0) {
        scrollDelta.current += delta;
        if (Math.abs(scrollDelta.current) > upThreshold) {
          setIsVisible(true);
          scrollDelta.current = 0;
        }
      }

      lastScrollY.current = currentScrollY;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [downThreshold, upThreshold]);

  return { isScrolled, isVisible, headerRef };
}
