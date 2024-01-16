import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";

function App() {
  return (
    // 아래 부분이 html 태그처럼 보이지만, jsx 문법임(xml임) => 따라서, html 문법과 유사하지만 동일하진 않음에 주의
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </div>
  );
}

export default App;
