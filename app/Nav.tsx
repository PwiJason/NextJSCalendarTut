// app/Nav.tsx
import React from 'react';
import { FaBars, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
const Nav = ({ handlePrev, handleNext, handleToday, darkMode, toggleDarkMode }) => {
    return (
      <nav className="flex justify-between border-b border-violet-100 p-4">
        <div>
        <FaBars className="inline-block mr-2" /> 
        <FaUserCircle className="inline-block mr-2" />
        {darkMode ? (
          <FaSun className="inline-block" onClick={toggleDarkMode} /> 
        ) : (
          <FaMoon className="inline-block" onClick={toggleDarkMode} />
        )}
      </div>
        <h1 className="font-bold text-2xl text-gray-700">Date range</h1>
        <div>
        <button onClick={handleToday}>Today</button>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
          
        </div>
      </nav>
    );
  };
  
  export default Nav;