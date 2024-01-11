import React, { useEffect, useRef } from "react";
import JsxParser from "react-jsx-parser";

function JsxRenderer({ jsxString, scale }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const scaledHeight = ref.current.getBoundingClientRect().height * scale;
      ref.current.parentNode.style.height = `${scaledHeight}px`;
    }
  }, [scale]);

  const scaledStyle = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
  };

  return (
    <main role="main">
      <div style={{ transform: "scale(1)", overflow: "hidden" }}>
        <div ref={ref} style={scaledStyle}>
          <JsxParser jsx={jsxString} />
        </div>
      </div>
    </main>
  );
}

export default JsxRenderer;
