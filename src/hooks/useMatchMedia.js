import { useEffect, useState } from "react";

const useMatchMedia = (mediaQuery) => {
  const [isMatchMedia, setIsMatchMedia] = useState(false);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    if (mediaQueryList.matches) {
      setIsMatchMedia(true);
    }
    const callback = (e) => {
      setIsMatchMedia(e.matches);
      console.log(`${mediaQuery} =>  ${e.matches}`);
    };
    mediaQueryList.addEventListener("change", callback);
    return () => {
      mediaQueryList.removeEventListener("change", callback);
    };
  }, [mediaQuery]);

  return isMatchMedia;
};

export default useMatchMedia;
