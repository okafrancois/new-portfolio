import { useState } from "react";
import ReactDOM from "react-dom";
import { gridIcon } from "../assets/icon-lib.tsx";

export default function GridOverlay() {
  const columns = Array.from({ length: 12 }, (_, i) => (
    <div key={i} className="bg-red/10 h-full"></div>
  ));
  const [visible, setVisible] = useState(false);

  const toggleGrid = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className={"fixed bottom-4 z-50 left-4 dark:text-alternative"}
        onClick={toggleGrid}
      >
        {gridIcon}
      </button>
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