import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import FilterBar from "./FilterBar";
// import FilterFunctions from "./FilterFunctions";
import '../index.css'
const Home = () => {
  const {
    state: { FilterProducts, cart },
    dispatch,productState
   
  } = useContext(CartContext);
  
  console.log(productState.FilterProducts);

  return (
  
    <>
    <div className="w-full h-full flex justify-around">
    <FilterBar />
 
    <div  className="container flex flex-wrap w-[75%] overflow-y-scroll ">
      {productState.FilterProducts.map((pd) => {
        return (
          <div key={pd.id} className="m-1 ">
            <Card border="primary" className="w-[370px]  bg-gray-100">
              <Card.Img
                variant="top"
                src={pd.image}
                alt={pd.name}
                className="rounded-lg h-[200px] w-auto object-cover "
              />
              <Card.Body>
                <Card.Title className="font-bold text-2xl">
                  {pd.name}
                </Card.Title>
                <Card.Text className="font-bold">${pd.price}</Card.Text>
                <Card.Text className="font-bold">
                  {pd.fastDelivery ? "Fast Delivery" : "4 Day Delivery"}
                </Card.Text>
                <Card.Text className="font-bold">
                <Rating rating={pd.ratings}/>
                </Card.Text>
                {cart.some((p) => p.id === pd.id) ? (
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: pd,
                      });
                    }}
                    className="mt-2"
                    variant="danger"
                  >
                    Remove From Cart
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: pd,
                      });
                    }}
                    className="mt-2"
                    variant="primary"
                    disabled={!pd.instock}
                  >
                    {!pd.instock ? "Out of Stock " : "Add to Cart"}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
    </div>
    </>
  );
};

export default Home;
