 import styleClass from "./Card.module.css";
 
 function Card(props) {
    return (
        // My props.children holds all the content passed by any particular opening and closing component tags
        <div className={styleClass.card}> {props.children} </div>
    )
 }

 export default Card;