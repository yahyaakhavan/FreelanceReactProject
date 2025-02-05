import { useEffect, useRef, useState } from "react";

export default function useDetectMobileScreen(desiredSize) {
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= desiredSize
  );
  const prevWidth = useRef(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth <= desiredSize && prevWidth.current > desiredSize) {
        setIsMobileView(true);
      }
      if (currentWidth > desiredSize && prevWidth.current <= desiredSize) {
        setIsMobileView(false);
      }
      prevWidth.current = currentWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isMobileView };
}
