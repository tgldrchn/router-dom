import "./App.css";
import Header from "./pages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const styles = {
    home: {
      backgroundImage: "./assets/brooke-cagle-cb4Dv50LN1Y-unsplash 1.jpg",
      backgroundSize: "100%",
      height: "1000px",
    },
    products: {
      backgroundImage: "none",
      backgroundSize: "100%",
      height: "1000px",
    },
  };
  return (
    <div className='body'>
      <div className='box' style={styles.home}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
