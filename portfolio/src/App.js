import React from "react";
import useWindowSize from './util/WindowSize';
import MobileDesign from './Components/MobileDesign';
import DesktopDesign from './Components/DesktopDesign';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const size = useWindowSize();

  return (
    <div className="App">
      {size.width < 768 ? <MobileDesign /> : <DesktopDesign />} 
    </div>
  );
}

export default App;
