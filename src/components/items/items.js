import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Basket from '../basket';
import Likes from '../likes';

function Items() {
  const [items, setItems] = useState([]);
  const allData = useSelector(state => state.allData);
  const filteredData = useSelector(state => state.filteredData);
  useEffect(() => {
    filteredData.length ? setItems(filteredData) : setItems(allData)
  }, [filteredData, items, allData])

  return (
    <div className="item">
      {items.map((item) => {
        return (
          <div key={item.id} className="item__wrapper">
            <div className={item.price.old_price ? "item__discount_visible" : "item__discount"}> {/* плашка с дискаунтом */}
              <p>Скидка</p>
            </div>
            <img alt="pic" src={`${item.image.url}`} className="item__image" /> {/* картинка */}
            <div className={item.code ? "item__vendor-code" : "item__vendor-code_hidden"}>{item.code}</div> {/* код/артикул */}
            <div className="item__name">{item.name}</div> {/* имя позиции */}
            <div className="item__bottom-wrapper">
            <div className="item__price"> {/* цена */}
              {item.price.old_price && <div className="item__price_old">{Math.floor(item.price.old_price)}</div>}
              {<div className="item__price_current">{Math.floor(item.price.current_price)}</div>}
            </div>
            <div className="item__buttons"> {/* кнопки */}
              <div className="item__basket"><Basket itemID={item.id} /></div>
              <div className="item__favorite"><Likes itemID={item.id} /></div>
            </div>
          </div>
          </div>
  )
})}
    </div >
  );
};

export default Items;
