import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, callback]);
};
