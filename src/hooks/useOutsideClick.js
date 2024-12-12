import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener(
      "click",
      (e) => {
        handleOutsideClick(e);
      },
      listenCapturing //the default is set to bubbling, but when true mean the capturing phase is ON.
    );
    /*when this component unmount this return is excute*/
    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick,
        listenCapturing
      );
    };
  }, [handler, listenCapturing]);
  return ref;
}
