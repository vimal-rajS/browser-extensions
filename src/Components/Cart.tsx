import { useContext, useState } from "react";
import { CartContext } from "./Context";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cart } = useContext(CartContext)!;
  const [added, setAdded] = useState<number>(1);
  const [showForm, setShoWForm] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    number: "",
  });
  const navigator = useNavigate();
  const handleMinus = () => {
    if (added > 1) {
      setAdded(added - 1);
    }
  };
  const handleClick = (item: any) => {
    setSelectItem(item);
    setShoWForm(true);
  };
  const handleChange = (e: any) => {
    setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
  };
  const handleSubmitted = (event: any) => {
    event.preventDefault();
    alert(`Place Your Order ${deliveryDetails.name}`);
    navigator("/shop");
  };
  const handleGoBack = () => {
    navigator("/shop");
    window.location.reload();
  };
  return (
    <div>
      <Navbar></Navbar>
      <Container
        className={showForm ? "cart-container modal-open" : "cart-container"}
      >
        <h1 className="shop-cart-title">Shopping Cart</h1>
        <div className="shop-row">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="shop-gird">
                <img src={item.image} alt={item.name} />
                <div className="shop-cart-details">
                  <h1>{item.name}</h1>
                  <h3>Rs.{item.price * added}</h3>
                  <div className="added-buttons">
                    <button onClick={handleMinus}>-</button>
                    <button>{added}</button>
                    <button onClick={() => setAdded(added + 1)}>+</button>
                  </div>
                  <div className="buy-btn">
                    <button onClick={handleClick}>Buy</button>
                  </div>
                </div>
                <div className="close-btn">
                  <CloseIcon
                    className="close-bar"
                    onClick={handleGoBack}
                  ></CloseIcon>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </Container>
      {showForm && selectItem && (
        <div className="cart-form-div">
          <div className="delivery-form">
            <h2>Delivery Details</h2>
            <form action="" className="delivery-cart">
              <label htmlFor="" className="delivery-name">
                Name :{" "}
                <input
                  type="text"
                  name="name"
                  value={deliveryDetails.name}
                  required
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="" className="delivery-address">
                Address : {""}
                <input
                  type="text"
                  name="address"
                  value={deliveryDetails.address}
                  required
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="" className="delivery-number">
                PhoneNumber :{" "}
                <input
                  type="text"
                  name="number"
                  value={deliveryDetails.number}
                  required
                  onChange={handleChange}
                />
              </label>
              <div className="order-btn">
                <button type="submit" onClick={handleSubmitted}>
                  Place Order
                </button>
                <button onClick={() => setShoWForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
