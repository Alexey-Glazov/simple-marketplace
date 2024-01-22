import { useRef } from "react";
import catalog from "../../data/catalog.json";
import { useState } from "react";
import Good from "../Good/Good";
import "./Catalog.css";

const catalogData = catalog;

const Catalog = () => {
  const filtersSet = new Set(
    catalogData.map((i) => {
      return i.brand;
    })
  );
  const filters = Array.from(filtersSet);
  const [goods, setGoods] = useState(catalogData);
  console.log(filters);
  const filterRef = useRef();
  const optionRef = useRef();

  const handlefiltersubmit = (event) => {
    event.preventDefault();
    setGoods(
      catalogData.filter((item) => {
        return item.brand === filterRef.current.value;
      })
    );
  };
  const resetFilters = () => {
    setGoods(catalogData);
  };

  return (
    <div className='catalog'>
      <form onSubmit={handlefiltersubmit} className='filters'>
        <button type='submit'>Применить фильтр</button>
        <select
          name='filter'
          id='filter'
          className='brand-filter'
          ref={filterRef}
        >
          {filters.map((item) => {
            return (
              <option ref={optionRef} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
      <button onClick={resetFilters}>сброс фильтра</button>
      <div className='goods'>
        {goods.map((item) => {
          return (
            <Good
              name={item.name}
              photoUrl={item.photoUrl}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Catalog;
