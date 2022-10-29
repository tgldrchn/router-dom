import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
        <Link className='logo' to = "./home">HOME</Link>
        <div className='bar'>
          <Link className='page' to="./products">products</Link>
          <Link className='page' to="./services">services</Link> 
          <Link className='page' to="./contact">contact</Link>
          <Link className='page' to="./login">login</Link>
        </div>
      </div>
  );
};

export default Header;