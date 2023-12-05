import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { gridIcon } from "../assets/icon-lib.tsx";

export default function GridOverlay() {
  const [visible, setVisible] = useState(false);
  const [breakpoint, setBreakpoint] = useState("");

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    wd: 1280,
    xw: 1536,
  };

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    const currentBreakpoint =
      Object.keys(breakpoints)
        .reverse()
        .find((key) => width >= breakpoints[key]) ?? "sm";
    setBreakpoint(currentBreakpoint);
  };

  useEffect(() => {
    window.addEventListener("resize", updateBreakpoint);
    updateBreakpoint(); // Initial check
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, [window]);

  const toggleGrid = () => {
    setVisible(!visible);
  };

  const columns = Array.from({ length: 12 }, (_, i) => (
    <div key={i} className="bg-red/10 h-full"></div>
  ));

  return (
    <>
      <button
        className={"fixed bottom-4 z-50 left-4 dark:text-alternative"}
        onClick={toggleGrid}
      >
        {gridIcon}
      </button>
      <span
        className={
          "fixed bottom-12 w-6 aspect-square z-50 left-4 dark:text-alternative"
        }
      >
        {breakpoint}
      </span>
      {visible &&
        ReactDOM.createPortal(
          <div className="w-full h-full z-50 pointer-events-none fixed top-0 left-0 c-container">
            <div className="grid h-full grid-cols-12 gap-gutter">{columns}</div>
          </div>,
          document.body,
        )}
    </>
  );
}