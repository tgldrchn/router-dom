import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./products";
import { Link } from "react-router-dom";
import Contact from "./contact";
import Login from "./login";
import Services from "./services";
import App from "../App";


const Header = ({ logo, one, two, three, four }) => {
  return (
    <BrowserRouter>
      <div className='header'>
        <Link className='logo' to = "./home">{logo}</Link>
        <div className='bar'>
          <Link className='page' to="./products">{one}</Link>
          <Link className='page' to="./services">{two}</Link>
          <Link className='page' to="./contact">{three}</Link>
          <Link className='page' to="./login">{four}</Link>
        </div>
      </div>

      <Routes>
        <Route path="./App" element={<App />}/>
        <Route path='./products' element={<Products />}/>
        <Route path='./services' element={<Services />}/>
        <Route path='./contact' element={<Contact />}/>
        <Route path='./login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Header;