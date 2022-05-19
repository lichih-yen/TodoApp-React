import "./Header.scss";
import { GoChecklist } from "react-icons/go";

function Header() {
  return (
    <header>
      <div className="title">
        <GoChecklist /> Todo App
      </div>
      <div className="author">by Li-Chih Yen</div>
    </header>
  );
}

export default Header;
