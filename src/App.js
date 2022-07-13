import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useContentful from "./Contentful";
import Container from "./Container";
import "./App.css";
import Receipe from "./Receipe.js";
import { GiChefToque } from "react-icons/gi";
import { IconContext } from "react-icons";

function App() {
  const menu = useContentful();
  console.log(menu);

  return (
    <div className="container mt-5">
      <div
        className="bg-warning bg-gradient rounded d-flex justify-content-center align-items-center align-self-center"
        style={{ minHeight: 150 }}
      >
        <IconContext.Provider value={{ size: "100px", color: "lightblue" }}>
          <div>
            <GiChefToque />
          </div>
        </IconContext.Provider>
        <a
          href="./index.html"
          className="d-inline my-auto style-none"
          style={{ textDecoration: "none" }}
        >
          <h1>CookBook</h1>
        </a>
      </div>
      <Container />
      <Receipe />
      <div>
        <div
          className="bg-warning bg-gradient rounded"
          style={{ minHeight: 75 }}
        >
          <p>Made by Team-3</p>
          <p>2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
