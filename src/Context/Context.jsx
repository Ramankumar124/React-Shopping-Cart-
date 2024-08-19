
import { createContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
 const products = [
    {
      id: "1",
      name: "Bicycle",
      price: "199.99",
      image: "https://images.unsplash.com/photo-1623216216626-f8bfd191552d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "2",
      name: "Smartphone",
      price: "499.99",
      image: "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "3",
      name: "Laptop",
      price: "899.99",
      image: https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: false,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "4",
      name: "Headphones",
      price: "59.99",
      image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: "5",
      name: "Gaming Console",
      price: "299.99",
      image: "https://images.unsplash.com/photo-1513599898445-1c34777500ab?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: false,
      ratings: 5,
    },
    {
      id: "6",
      name: "Backpack",
      price: "39.99",
      image: "https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "7",
      name: "Watch",
      price: "149.99",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: false,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "8",
      name: "Running Shoes",
      price: "79.99",
      image: "https://plus.unsplash.com/premium_photo-1663036305464-5abcd6b7fd18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: false,
      ratings: 4,
    },
    {
      id: "9",
      name: "Camera",
      price: "549.99",
      image: "https://images.unsplash.com/photo-1508264165352-258a4b1c073e", 
      instock: true,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "10",
      name: "Sunglasses",
      price: "29.99",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: "11",
      name: "Bluetooth Speaker",
      price: "99.99",
      image: "https://images.unsplash.com/photo-1668649175276-fa4f96beb185?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "12",
      name: "Tablet",
      price: "399.99",
      image: "https://images.unsplash.com/photo-1471279136892-55af5dc6895f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: false,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "13",
      name: "Wireless Mouse",
      price: "24.99",
      image: "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "14",
      name: "Desk Lamp",
      price: "19.99",
      image: "https://plus.unsplash.com/premium_photo-1681412205381-c0e9681bcbb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: false,
      ratings: 4,
    },
    {
      id: "15",
      name: "Notebook",
      price: "9.99",
      image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: "16",
      name: "Coffee Maker",
      price: "79.99",
      image: "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "17",
      name: "Electric Kettle",
      price: "29.99",
      image: "https://images.unsplash.com/photo-1647619124290-10fb9273b4b5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: false,
      ratings: 4,
    },
    {
      id: "18",
      name: "Water Bottle",
      price: "14.99",
      image: "https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "19",
      name: "Yoga Mat",
      price: "24.99",
      image: "https://plus.unsplash.com/premium_photo-1667739346017-fbc9cd35d666?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "20",
      name: "Tennis Racket",
      price: "79.99",
      image: "https://plus.unsplash.com/premium_photo-1666913667023-4bfd0f6cff0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      instock: true,
      fastDelivery: true,
      ratings: 4,
    },
  ];

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
