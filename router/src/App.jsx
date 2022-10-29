import "./App.css";
import Header from "./pages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Home from "./pages/Home"

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
