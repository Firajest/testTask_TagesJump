import { useState, useEffect } from 'react';

function Basket({ itemID }) {
  const [icon, setIcon] = useState("pic/icon_busket.png");
  let busket = [];
  if (!localStorage.getItem("busket")) localStorage.setItem('busket', JSON.stringify([]));

  const handleClick = () => {
    if (JSON.parse(localStorage.getItem("busket")).filter((el) => el === itemID).length) {
      busket = JSON.parse(localStorage.getItem("busket")).filter((el) => el !== itemID);
      localStorage.setItem('busket', JSON.stringify(busket));
      setIcon("pic/icon_busket.png");
    } else {
      busket = (JSON.parse(localStorage.getItem("busket")));
      busket.push(itemID)
      localStorage.setItem('busket', JSON.stringify(busket));
      setIcon("pic/icon_ok.png");
    };
  };

  useEffect(() => {
    if (localStorage.getItem("busket") && JSON.parse(localStorage.getItem("busket")).filter((el) => el === itemID).length) {
      setIcon("pic/icon_ok.png");
    } else setIcon("pic/icon_busket.png");
  }, [setIcon, itemID]);
  return (
    <img alt="pic" src={icon} onClick={() => handleClick()} />
  );
};

export default Basket;
