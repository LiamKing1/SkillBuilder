import { useRef } from "react";

import Card from "../userInterface/Card";
import styleClass from "./NewMeetupForm.module.css";


function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmitForm(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription 
    }

    console.log(meetupData)
  };

  return (
    <Card>
      <form className={styleClass.form} onSubmit={handleSubmitForm}>
        <div className={styleClass.control}>
          <label htmlFor="title">
            Title
            </label>
          <input type="text" required id="title" ref={titleInputRef}></input>
          </div>

          <div className={styleClass.control}>
          <label htmlFor="image">
            Location Image
            </label>
          <input type="url" required id="image" ref={imageInputRef}></input>
          </div>

          <div className={styleClass.control}>
          <label htmlFor="address">
            Address
            </label>
          <input type="text" required id="address" ref={addressInputRef}></input>
          </div>

          <div className={styleClass.control}>
          <label htmlFor="description">
            Description
            </label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>

        <div className={styleClass.actions}>
            <button> Add Meetup </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
