import React, { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <div className="container mx-auto w-1/3">
        <div className="wrapper">
          <h1 className="py-4 text-xl ">Qr-code</h1>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="input href for qr code"
            className="border border-gray-300 mb-10 w-2/4 h-8 p-4 font-light text-sm focus:outline-none focus:border-gray-600"
          />
          <QRCode className="qr-code mb-5" value={inputValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
