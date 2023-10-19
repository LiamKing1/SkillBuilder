import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
  const navigate = useNavigate();

  function fetchDataHandler(meetupData) {
    // need to at /"desired url name" + .json as required by firebase
    fetch(
      // Database url i got from firebase
      "https://react-skillbuilder-ba1e8-default-rtdb.firebaseio.com/mmetup.json",
      {
        // firebase automatically sends a GET request when we need a POST request
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        },
      }
    ).then(() => {
      navigate("/thankyou");
    });
  }

  return (
    <section>
      <h1>Add New Meetup!</h1>
      {/* <NewMeetupForm /> */}
      <NewMeetupForm onSendMeetupData={fetchDataHandler} />
    </section>
  );
}

export default NewMeetups;
