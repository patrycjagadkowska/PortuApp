import classes from "./styles/HamburgerButton.module.css";

const HamburgerButton = ({ openMenu, toggleMenu }) => {
  return (
    <button
      aria-label="open menu"
      onClick={toggleMenu}
      className={`${classes.hamburger} ${
        openMenu ? classes["hamburger__open"] : ""
      }`}
    >
      <span className={classes["hamburger__line"]} />
      <span className={classes["hamburger__line"]} />
      <span className={classes["hamburger__line"]} />
    </button>
  );
};

export default HamburgerButton;
