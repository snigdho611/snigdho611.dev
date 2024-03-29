import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useRef } from "react";

function App() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {/* <div className="blob" ref={cursorRef}></div> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
