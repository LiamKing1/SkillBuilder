import { Link } from "react-router-dom";

import styleClass from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styleClass.header}>
      <div className={styleClass.logo}> React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups </Link>
          </li>
          <li>
            <Link to="/fav-meets"> Favorite Meetups </Link>
          </li>
          <li>
            <Link to="/new-meets"> New Meetups </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
