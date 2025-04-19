import "../Components/Navbar.css";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function SearchBar() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div className="parent-navbar">
      <Container className="navbar">
        <div className="title-bar">
          <h1 className="title">Fashion</h1>
         
        </div>
        <div className="categories">
          <div className={`navigation ${isOpened ? "active" : ""}`}>
            <button className="home-btn">
              <HomeIcon sx={{ fontSize: [26, 26, 25] }}></HomeIcon>
             <Link to="/home" className="navbar-title">Home</Link>
            </button>
            <button className="about-btn">
              <InfoIcon sx={{ fontSize: [26, 26, 25] }}></InfoIcon>
              <Link to="/about" className="navbar-title">About</Link>
            </button>
            <button className="shop-btn">
              <ShoppingBagIcon
                sx={{ fontSize: [26, 26, 25] }}
              ></ShoppingBagIcon>
              <Link to="/shop" className="navbar-title">Shop</Link>
            </button>
            <button className="contact-btn">
              <AccountCircleIcon
                sx={{ fontSize: [26, 26, 25] }}
              ></AccountCircleIcon>
              <Link to="/contact" className="navbar-title">Contact</Link>
            </button>
            <button className="cart-btn">
              <ShoppingCartIcon
                sx={{ fontSize: [26, 26, 25] }}
              ></ShoppingCartIcon>
              <Link to="/cart" className="navbar-title">Cart</Link>
            </button>
          </div>
          <div className="menu-bar" onClick={toggleMenu}>
            <MenuIcon sx={{ fontSize: 30 }}></MenuIcon>
          </div>
          
        </div>
      </Container>
      
    </div>
  );
}
