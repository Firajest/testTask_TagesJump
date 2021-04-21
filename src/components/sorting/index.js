import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import materials from '../../data/materials.json';
import { filterByMaterial, sortByPriceAsc, sortByPriceDesc } from '../../redux/actionCreators';

function SortingOpts() {
  const [material, setMaterial] = useState();
  const [price, setPrice] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (price === 'asc') dispatch(sortByPriceAsc());
    if (price === 'desc') dispatch(sortByPriceDesc());
  }, [price, setPrice, dispatch]);

  useEffect(() => {
    dispatch(filterByMaterial(material));
  }, [material, setMaterial, dispatch]);

  const materialChange = (event) => {
    setMaterial(event.target.value);
  };
  const priceSortChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="sorting-filters">
      <div className="sorting-filters__wrapper">
        <span className="sorting-filters__label">Сортировать по</span>
        <div className="sorting-filters__option-wrapper">
          <select className="sorting-filters__options" value={price} onChange={(event) => priceSortChange(event)}>
            <option selected className="sorting-filters_hidden"></option>
            <option value='asc'>Цена по возрастанию</option>
            <option value='desc'>Цена по убыванию</option>
          </select>
        </div>
      </div>
      <div className="sorting-filters__wrapper">
        <span className="sorting-filters__label">Материал</span>
        <div className="sorting-filters__option-wrapper">
          <select className="sorting-filters__options" value={material} onChange={(event) => materialChange(event)}>
            <option selected className="sorting-filters_hidden"></option>
            {materials.map((material) => <option value={material.id}>{material.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SortingOpts;
