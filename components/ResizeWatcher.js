import { useEffect } from "react";

export default function ResizeWatcher() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener(setVh);
    };
  }, []);

  return <></>;
}
