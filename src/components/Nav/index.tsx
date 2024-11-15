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
        <Link to="/Beans/beans">Beans</Link>
        <Link to="/Beans/facts">Facts</Link>
        <Link to="/Beans/recipe">Recipe</Link>
        <Link to="/Beans/сombinations">Combinations</Link>
        <Link to="/Beans/history">History</Link>
        <Link to="/Beans/about">About</Link>
        <Link to="/Beans/review">Review</Link>
      </div>
    </nav>
  );
};

export default Nav;
