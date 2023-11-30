import { useState } from "react";
import ReactDOM from "react-dom";
import "./styling.scss";
import { gridIcon } from "../../assets/icon-lib.tsx";

export default function GridOverlay() {
  const columns = Array.from({ length: 12 }, (_, i) => (
    <div key={i} className="col"></div>
  ));
  const [visible, setVisible] = useState(true);

  const toggleGrid = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className={"grid-toggle dark:text-alternative"}
        onClick={toggleGrid}
      >
        {gridIcon}
      </button>
      {visible &&
        ReactDOM.createPortal(
          <div className="overlay c-container">
            <div className="grid gap-gutter">{columns}</div>
          </div>,
          document.body,
        )}
    </>
  );
}