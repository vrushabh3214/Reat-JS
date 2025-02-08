import React, { useState, useEffect } from "react";
import "../../sass/styles.scss";
import { Link } from "react-router-dom";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      setIsDark(true);
      setDark();
    } else {
      setIsDark(false);
      setLight();
    }
  }, []);

  const toggleTheme = (e) => {
    const newIsDark = e.target.checked;
    setIsDark(newIsDark);
    if (newIsDark) {
      setDark();
    } else {
      setLight();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <>
      <div className="menu">
        <h1>Choose Your Theme</h1>
        <Link className="exitBtn" to="/">
          Home
        </Link>
      </div>
      <div className="toggle-box">
        <span>🌞</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            checked={isDark}
          />
          <span className="slider round"></span>
        </label>
        <span>🌒</span>
      </div>
    </>
  );
};

export default DarkMode;
