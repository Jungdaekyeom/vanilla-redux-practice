import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../router/Home";
import Detail from "../router/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
