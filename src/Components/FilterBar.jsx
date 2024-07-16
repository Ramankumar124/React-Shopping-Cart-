import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import { CartContext } from '../Context/Context';

const FilterBar = () => {
  const {
    state: { cart, product },
    productDispatch,
  } = useContext(CartContext);
  const [rate, setrating] = useState(0);
  const [selectedSort, setSelectedSort] = useState('');
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [fastDeliveryOnly, setFastDeliveryOnly] = useState(false);

useEffect(() => {
  productDispatch({
    type: "SORT_BY_RATING",
    payload: rate
  });
}, [rate])


  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
    productDispatch({
      type: sortType,
    });
  };

  const handleIncludeOutOfStockChange = () => {
    setIncludeOutOfStock(!includeOutOfStock);
    productDispatch({
      type: 'FILTER_BY_STOCK',
      payload: !includeOutOfStock,
    });
  };

  const handleFastDeliveryOnlyChange = () => {
    setFastDeliveryOnly(!fastDeliveryOnly);
    productDispatch({
      type: 'FILTER_BY_DELIVERY',
      payload: !fastDeliveryOnly,
    });
  };

  const handleClearFilters = () => {
    setSelectedSort('');
    setIncludeOutOfStock(false);
    setFastDeliveryOnly(false);
    setrating(0);
    productDispatch({
      type: 'CLEAR_FILTERS',
    });
  };

  return (
    <div className="bg-[#343a40] sticky h-screen w-[20%] m-3 text-white flex flex-col px-4 gap-4">
      <h1 className="text-3xl p-4">Filter Products</h1>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          checked={selectedSort === 'SORT_ASCENDING'}
          onChange={() => handleSortChange('SORT_ASCENDING')}
          type="radio"
          id="inline-1"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          checked={selectedSort === 'SORT_DESCENDING'}
          onChange={() => handleSortChange('SORT_DESCENDING')}
          type="radio"
          id="inline-2"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group2"
          type="checkbox"
          checked={includeOutOfStock}
          onChange={handleIncludeOutOfStockChange}
          id="inline-3"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group2"
          type="checkbox"
          checked={fastDeliveryOnly}
          onChange={handleFastDeliveryOnlyChange}
          id="inline-4"
        />
      </span>
      <span className="flex items-center">
        <label>Rating :</label>
        <Rating rating={rate} setrating={setrating} />
      </span>
      <Button onClick={handleClearFilters}>Clear Filter</Button>
    </div>
  );
};

export default FilterBar;
