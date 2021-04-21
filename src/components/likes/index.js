import { useState, useEffect } from 'react';

function Likes({ itemID }) {
  const [liked, setLiked] = useState(false);
  let favourites = [];
  if (!localStorage.getItem("favourites")) localStorage.setItem('favourites', JSON.stringify([]));

  const handleClick = () => {
    if (JSON.parse(localStorage.getItem("favourites")).filter((el) => el === itemID).length) {
      favourites = JSON.parse(localStorage.getItem("favourites")).filter((el) => el !== itemID);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      setLiked(false);
    } else {
      favourites = (JSON.parse(localStorage.getItem("favourites")));
      favourites.push(itemID)
      localStorage.setItem('favourites', JSON.stringify(favourites));
      setLiked(true);
    };
  }
  const picStyle = {
    backgroundColor: liked? 'yellow' : '',
  }

  useEffect(() => {
    if (localStorage.getItem("favourites") && JSON.parse(localStorage.getItem("favourites")).filter((el) => el === itemID).length) {
      setLiked(true);
    } else setLiked(false);
  }, [itemID]);
  return (
    <img alt="pic" src={'/pic/heart.png'} style={picStyle} onClick={() => handleClick()} />
  );
};

export default Likes;
