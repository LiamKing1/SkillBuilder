import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeets ) => {},
  deleteFavorite: (meetId) => {},
  itemIsFavorite: (meetId) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeets) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeets);
    });
  }
  function deleteFavoriteHandler(meetId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meets) => meets.id !== meetId);
    });
  }
  function itemIsFavoriteHandler(meetId) {
    return userFavorites.some((meets) => meets.id === meetId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    deleteFavorite: deleteFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
