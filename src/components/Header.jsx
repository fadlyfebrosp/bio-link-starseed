import PropTypes from "prop-types";
import { FiSun, FiMoon, FiInfo } from "react-icons/fi";

export function Header({ darkTheme, toggleTheme, openInfo }) {
  return (
    <header className="relative w-screen h-44 overflow-hidden rounded-b-3xl">
      <img
        src={darkTheme ? "/img/dark.jpg" : "/img/light.jpg"}
        alt="Header background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className={`absolute inset-0 ${
          darkTheme ? "bg-black/55" : "bg-black/15"
        }`}
      />

      {/* INFO BUTTON (LEFT) */}
      <button
        onClick={openInfo}
        aria-label="Info"
        className="
          absolute top-4 left-4 z-10
          btn btn-sm btn-circle
          backdrop-blur
          border border-amber-400/60
          bg-white/80 text-slate-900
          hover:bg-white
          dark:bg-neutral-800/80 dark:text-amber-300
        "
      >
        <FiInfo />
      </button>

      {/* THEME TOGGLE (RIGHT) */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="
          absolute top-4 right-4 z-10
          btn btn-sm btn-circle
          backdrop-blur
          border border-amber-400/60
          bg-white/80 text-slate-900
          hover:bg-white
          dark:bg-neutral-800/80 dark:text-amber-300
        "
      >
        {darkTheme ? <FiSun /> : <FiMoon />}
      </button>
    </header>
  );
}

Header.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  openInfo: PropTypes.func.isRequired,
};
