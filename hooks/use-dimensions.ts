import { MutableRefObject, RefObject, useEffect, useRef } from "react";

export const useDimensions = (ref: RefObject<HTMLElement>) => {
  const dimensions: MutableRefObject<{
    width: number | undefined;
    height: number | undefined;
  }> = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current?.offsetWidth;
    dimensions.current.height = ref.current?.offsetHeight;
  }, []);

  return dimensions.current;
};
