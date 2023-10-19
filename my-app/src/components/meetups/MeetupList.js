import MeetupItem from "./MeetupItem";
import styleClass from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={styleClass.list}>
      {props.meets.map((meet) => (
        <MeetupItem
          key={meet.id}
          id={meet.id}
          image={meet.image}
          title={meet.title}
          address={meet.address}
          description={meet.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
