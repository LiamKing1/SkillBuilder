import { useContext } from "react";

import FavoriteContext from "../store/Favorite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoriteMeetups() {
    const favortieCtx = useContext(FavoriteContext);

    let content;

    if (favortieCtx.totalFavorites === 0) {
        content = <p> You currently have no favorites! </p>
    } else {
       content = <MeetupList meets={favortieCtx.favorites}/>
    }

    return (
        <section>
            <h1> My Favorite Meetups </h1>
            {content}
        </section>
    )
}

export default FavoriteMeetups;