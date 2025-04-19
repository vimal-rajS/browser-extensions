import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Interface from "./Components/Interface";
import Home from "./Components/Home";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import { CartProvider } from "./Components/Context";
function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Interface></Interface>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
