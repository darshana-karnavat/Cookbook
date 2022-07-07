import React, { useState, useEffect } from "react";
import "./App.css";
// import Header from "./Header";
// import Footer from "./components/Footer";
// import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.css";
import useContentful from "./components/useContentful";

function App() {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then((res) => setRecipes(res));
  });
  return (
    <div className="App">
      {/* <header className="App-header">
        <div>
          <Header />
          <Container />
          <Footer /> */}
      {/* </div>
      </header> */}
      {recipes.map((el) => (
        <div>
          {" "}
          <h1>{recipes[0].title}</h1>
          <p>what?</p>
          <h2>{recipes[0].shortDescription}</h2>
          {recipes[0].ingredients.map((ing) => (
            <span>{ing}</span>
          ))}
          <p>{recipes[0].description}</p>
          <img src={recipes[0].dishImage} alt={recipes[0].title} />
        </div>
      ))}
    </div>
  );
}

export default App;
