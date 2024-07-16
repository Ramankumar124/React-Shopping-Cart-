import { faker } from "@faker-js/faker";
import { createContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    instock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const initialState = {
    cart: [],
    product: products,
    FilterProducts: products.filter((pd)=>pd.instock==true),
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [productState, productDispatch] = useReducer(productReducer, initialState);

  return (
    <CartContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
