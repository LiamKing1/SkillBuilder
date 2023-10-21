import { Link } from "react-router-dom";
import { useContext } from "react";

import styleClass from "./MainNavigation.module.css";
import FavoriteContext from "../../store/Favorite-context";

function MainNavigation() {
  const favortieCtx = useContext(FavoriteContext);

  return (
    <header className={styleClass.header}>
      <div className={styleClass.logo}> Liam's Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups </Link>
          </li>
          <li>
            <Link to="/new-meets"> New Meetups </Link>
          </li>
          <li>
            <Link to="/fav-meets"> 
            Favorite Meetups 
            <span className={styleClass.badge }> {favortieCtx.totalFavorites} </span>
            </Link>
          </li>
          {/* <li>
            <Link to="/thankyou"> New Meetups </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
