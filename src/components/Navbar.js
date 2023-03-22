import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";
import gear from "../images/gear.png";
import home from "../images/home.png";
import leftArrow from "../images/left-arrow.png";
import menu from "../images/menu.png";
import mic from "../images/microphone-black-shape.png";
import styles from "../style/Navbar.module.css";
function Navbar() {
  const { id } = useParams();
  const location = useLocation();
  const episodes = useSelector((state) => state.animeList.animeList?.data);
  const filteredArr = episodes
    ? episodes?.filter((episode) => episode.mal_id == id)
    : [];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {location.pathname === `/episodes/${id}` && (
          <NavLink to="/" className={styles.arrow}>
            <img src={leftArrow} height="20px" width="20px" />
          </NavLink>
        )}
        {location.pathname === "/" && (
          <img src={home} height="20px" width="20px" />
        )}

        {filteredArr[0] ? (
          <NavLink to="#" className={styles.brand}>
            {filteredArr[0]?.title}
          </NavLink>
        ) : (
          <NavLink to="/" className={styles.brand}>
            ANIME
          </NavLink>
        )}

        <div className={styles.desktopIcon}>
          <NavLink to="#">
            <img src={mic} height="20px" width="20px" />
          </NavLink>
          <NavLink to="#">
            <img src={gear} height="20px" width="20px" />
          </NavLink>
        </div>
        <NavLink to="#" className={styles.menu}>
          <img src={menu} height="20px" width="20px" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
