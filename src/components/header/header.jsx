import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import "./header.css";

// import styles from './header.css';
// { value, setValue }
export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Game Store
        </Link>
      </div>
      
      {/* <div className={styles.search}>
					<input value={value} onChange={e => setValue(e.target.value)} />
					
				</div> */}

        <input className="search" 
        type="text" 
        placeholder="Поиск" 
        />
        {/* <img className="search__img">
          <img src="/game-covers/search.png" alt="search" />
        </img> */}
        
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
