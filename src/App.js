import React from "react";
import JsxRenderer from "./components/JsxRenderer";

function App() {
  const jsxString =
    '<div style="background-color: blue; width: 1400px; height: 1500px; display: flex; align-items: center; justify-content: center; color: white;">Test String</div>';

  return (
    <div>
      <div className="bg-gray-200 text-center">----Random Container----</div>
      <JsxRenderer jsxString={jsxString} scale={0.286} />
      <div className="bg-gray-200 text-center">----Random Container----</div>
    </div>
  );
}

export default App;
