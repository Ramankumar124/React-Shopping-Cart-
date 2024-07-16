import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import FilterBar from "./Components/FilterBar";
import CartPage from "./Components/Cart/CartPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className='h-screen w-screen overflow-hidden '> 
      <Header/>
      <Outlet className='flex   '/>
      </div>
    </>
  );
}

export default App;
