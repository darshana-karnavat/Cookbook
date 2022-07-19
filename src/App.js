import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DishCard from './DishCard';
import SomeDish from './SomeDish';
import './App.css';
import menu from './menu.js';
import { GiChefToque } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { Route, Routes, Link } from 'react-router-dom';
import UseContentful from './useContentful';
import Receipe from './Receipe';
import NoMatch from './NoMatch';

const App = () => {
  const { getTitles } = UseContentful();
  const allThrouseLocalStorage = JSON.parse(localStorage.getItem('titles'));

  useEffect(() => {
    getTitles().then((data) => localStorage.setItem('titles', JSON.stringify(data)));
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="bg-warning bg-gradient rounded d-flex justify-content-center align-items-center align-self-center"
        style={{ minHeight: 150 }}>
        <IconContext.Provider value={{ size: '100px', color: 'white' }}>
          <div>
            <GiChefToque />
          </div>
        </IconContext.Provider>
        <Link to="/" className="d-inline my-auto style-none" style={{ textDecoration: 'none' }}>
          <h1>CookBook</h1>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<MainMenu />} />

        <Route path="/soups" element={<SomeDish prop={allThrouseLocalStorage} />} />
        <Route path="/soups/:title" element={<Receipe recipe={allThrouseLocalStorage} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <div>
        <div className="bg-warning bg-gradient rounded p-2" style={{ minHeight: 55 }}>
          <p
            className="text-center"
            style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: '#0d6efd' }}>
            <b>Made by Team-3</b>
          </p>
          <p
            className="text-center"
            style={{ fontFamily: 'Roboto', fontSize: '0.8rem', color: 'grey' }}>
            copyright © 2022 all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

const MainMenu = () => {
  return (
    <div className="row my-5">
      {menu.map((dish, index) => (
        <DishCard dish={dish} key={index} />
      ))}
    </div>
  );
};
