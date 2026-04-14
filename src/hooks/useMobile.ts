import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const listener = () => setIsMobile(media.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);
  return isMobile;
}

export default useIsMobile;