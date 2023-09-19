import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles._acum}>
      <div className={styles._acun}>
        <div className={styles._acup}>
          <a className={styles._a6hd} href="/" role="link" tabIndex="0">
            <div>
              <img src="/instagram-logo.png" alt="Instagram Logo" />
            </div>
          </a>
        </div>
      </div>
      <div className={styles._acuq}>
        {/* Hier können weitere Elemente hinzugefügt werden */}
      </div>
    </div>
  );
};

export default Header;
