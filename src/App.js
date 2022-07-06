import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
