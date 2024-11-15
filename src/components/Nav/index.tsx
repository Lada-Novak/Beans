import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.navbar}>
      <button
        className={`${style.burgerButton} ${isOpen ? style.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
      </button>

      
      <div className={`${style.menu} ${isOpen ? style.open : ""}`}>
        <Link to="/beans">Beans</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/recipe">Recipe</Link>
        <Link to="/сombinations">Combinations</Link>
        <Link to="/history">History</Link>
        <Link to="/about">About</Link>
        <Link to="/review">Review</Link>
      </div>
    </nav>
  );
};

export default Nav;
