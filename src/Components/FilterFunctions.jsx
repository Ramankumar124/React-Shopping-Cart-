import React, { useContext } from 'react';
import { CartContext } from '../Context/Context';

const FilterFunctions = (fcn) => {
  const { product, setproduct } = useContext(CartContext);

  let sortedFilteredProducts;
  switch (fcn) {
    case "Ascending_sort":
      sortedFilteredProducts = [...product].sort((a, b) => a.price - b.price);
      break;
    case "Descending_sort":
      sortedFilteredProducts = [...product].sort((a, b) => b.price - a.price);
      break;
    case "Fast_delevery_sort":
      sortedFilteredProducts = product.filter(pd => pd.fastDelivery === true);
      break;
    case "InStock_sort":
      sortedFilteredProducts = product.filter(pd => pd.instock !== 0);
      break;
    default:
      sortedFilteredProducts = product;
  }

  setproduct(sortedFilteredProducts);
  return sortedFilteredProducts;
};

export default FilterFunctions;
