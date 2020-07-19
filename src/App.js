import React, { useEffect, useState } from "react";
import "./App.css";
import Title from './components/title'
import Mine from './components/mine'

const App = () => {

  function getHeight() {
    let elem = document.documentElement || document.scrollingElement;
    setHeight(elem.clientHeight)
  }

  let [height, setHeight] = useState("")

  useEffect(() => {
    getHeight()
  })

  return (
    <div className="container" style={{ height: `${height}px` }}>
      <Title />
      <Mine />
    </div>
  );
};

export default App;
