import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [loading, setLoading] = useState(true);
  const [loadedMeets, setLoadedMeets] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-skillbuilder-ba1e8-default-rtdb.firebaseio.com/mmetup.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meets = [];

        for (const key in data) {
          const meet = {
            id: key,
            ...data[key],
          };
          meets.push(meet);
        }

        setLoading(false);
        setLoadedMeets(meets);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p> Loading... </p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* imported the MeetupList component and the prop that i used therin and use it to pass in the data array's values*/}
      <MeetupList meets={loadedMeets} />
      {/* Below was simply used for testing purposes */}
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}> {meetup.title} </li>;
        })}
      </ul>  */}
    </section>
  );
}

export default AllMeetups;
