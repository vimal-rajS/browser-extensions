import "./Shop.css";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import { products } from "./Products";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Context";
function Shop() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(products);
  const { addToCart } = useContext(CartContext)!;
  const handleSearch = (event: any) => {
    const searchItems = event.target.value.toLowerCase();
    const filteredItems = products.filter((items) => {
      return items.category.toLowerCase().includes(searchItems);
    });
    setProduct(filteredItems);
  };

  const categoryFilter = (Filter: string) => {
    const handleFilter = products.filter((item) => {
      return item.category === Filter;
    });
    setProduct(handleFilter);
  };

  const handleAddToCart = (item: any) => {
    addToCart(item);
    navigate("/cart"); // Redirect to cart page
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="shop-div">
        <div className="shop-title">
          <h1>Shop</h1>
        </div>
        <Container className="cart-container">
          <div className="filters">
            <div className="search-container">
              <SearchIcon className="search-icon"></SearchIcon>
              <input
                type="search"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
            <div className="category-group">
              <button
                onClick={() => setProduct(products)}
                className="category-btn"
              >
                All
              </button>
              <button
                onClick={() => categoryFilter("Men's Dress")}
                className="category-btn"
              >
                Mens
              </button>
              <button
                onClick={() => categoryFilter("Women's Dress")}
                className="category-btn"
              >
                Women's
              </button>
              <button
                onClick={() => categoryFilter("Shoes")}
                className="category-btn"
              >
                Shoes
              </button>
              <button
                onClick={() => categoryFilter("Accessories")}
                className="category-btn"
              >
                Accessories
              </button>
            </div>
          </div>
        </Container>
        <Container>
          <div className="row">
            <div className="col">
              {product.length > 0 ? (
                product.map((item: any) => {
                  return (
                    <div key={item.id} className="cart">
                      <img src={item.image} alt="" />
                      <h1>{item.name}</h1>
                      <h3>Rs.{item.price * 5}</h3>
                      <button onClick={() => handleAddToCart(item)}>
                        Add to Cart
                      </button>
                    </div>
                  );
                })
              ) : (
                <p>No More Items There❌</p>
              )}
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Shop;
