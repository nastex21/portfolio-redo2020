import React from "react";
import useWindowSize from './util/WindowSize';

function App() {
  const size = useWindowSize();

  return (
    <div className="App">
      {size.width}px / {size.height}px
      {size.width < 768 ? <p>Mobile</p> : <p>Desktop</p>} 
    </div>
  );
}

export default App;
