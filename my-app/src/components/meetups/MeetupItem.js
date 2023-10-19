import Card from "../userInterface/Card";
import styleClass from "./MeetupItem.module.css";

function MeetupItem(props) {
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
          <button> TO FAVORITES </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
