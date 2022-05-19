import { NavLink } from "react-router-dom";
import "./MainMenu.scss";

function MainMenu() {
  return (
    <nav>
      <NavLink to="/">Tasks</NavLink>
      <NavLink to="/help">Help</NavLink>
    </nav>
  );
}

export default MainMenu;
