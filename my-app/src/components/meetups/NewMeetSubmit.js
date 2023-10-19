import { useNavigate } from "react-router-dom";
import styleClass from "../meetups/NewMeetupForm.module.css";
import Card from "../userInterface/Card";

function NewMeetSubmit() {
  const navigate = useNavigate();

  function backHome() {
    navigate("/");
  }

  return (
    // <div >
    <Card>
      <div className={styleClass.adjust}>
        <h1> Your Meetup Was Successfully Created </h1>
      </div>
      <div className={styleClass.actions}>
        <button onClick={backHome}> BACK HOME </button>
      </div>
    </Card>
    // </div>
  );
}

export default NewMeetSubmit;
