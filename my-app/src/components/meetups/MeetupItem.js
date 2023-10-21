import { useContext } from "react";
import Card from "../userInterface/Card";
import styleClass from "./MeetupItem.module.css";
import FavoriteContext from "../../store/Favorite-context";

function MeetupItem(props) {
  const favortieCtx = useContext(FavoriteContext);

  const itemIsFavorite = favortieCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favortieCtx.deleteFavorite(props.id);
    } else {
      favortieCtx.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={styleClass.item}>
      <Card>
        <div className={styleClass.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styleClass.content}>
          <h3>{props.title}</h3>
          <address> {props.address} </address>
          <p> {props.description} </p>
        </div>
        <div className={styleClass.actions}>
          <button onClick={toggleFavoriteStatusHandler}> {itemIsFavorite ? "Remove From Favorites" : "To Favorites"} </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
