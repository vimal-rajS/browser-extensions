import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import trendingCollections from "./TrendingCollection";
import SliderOne from "../assets/Slider1.png";
import SliderThree from "../assets/Simple Modern Photo Collage Autumn Fashion Sale Banner.png";
import SliderTwo from "../assets/Website Homepage Fashion Collage Banner.png";
import OfferImage from "../assets/men&women.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const CustomCarousel = () => {
  const [dresses, SetDresses] = useState<Array<any>>(trendingCollections);
  const coupon = "fashions@10";
  const navigate = useNavigate();
  const [copied, SetCopied] = useState<boolean>(false);
  const [time, setTime] = useState<number>(10 * 60);
  const handleCopy = () => {
    navigator.clipboard.writeText(coupon).then(() => {
      SetCopied(true);
      setTimeout(() => SetCopied(false), 2000);
    });
  };
  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}`;
  };
  const handlePage = () => {
    navigate("/shop");
  };
  return (
    <div>
      <Navbar></Navbar>
      <Carousel
        className="carousel-div"
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} 
        showStatus={false} 
        stopOnHover={true} 
        transitionTime={500} 
        showIndicators={false}
      >
        <div>
          <img src={SliderOne} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={SliderTwo} alt="" />
        </div>
        <div>
          <img src={SliderThree} alt="Slide 3" />
        </div>
      </Carousel>
      <Container>
        <div className="variety-div">
          <h1 className="variety-title ">variety's</h1>
          <div className="variety-s">
            <div className="variety-shirt">
              <div className="variety-shirt-details">
                <h1>
                  Clothing <br />
                  Collections 2000+
                </h1>
                <button onClick={handlePage}>Shop Now</button>
                <div className="underline"></div>
              </div>
              <img src="src/assets/t-shirt.jpg" alt="" />
            </div>
            <div className="variety-shoe">
              <img src="src/assets/shoe.jpg" alt="" />
              <div className="variety-shoe-details">
                <h1>
                  Branded <br /> Shoes
                </h1>
                <button onClick={handlePage}>Shop Now</button>
                <div className="shoe-underline"></div>
              </div>
            </div>
            <div className="variety-glass">
              <div className="variety-glass-details">
                <h1>Accessories</h1>
                <button onClick={handlePage}>Shop Now</button>
                <div className="glass-underline"></div>
              </div>
              <img src="src/assets/sun-glass.jpg" alt="" />
            </div>
          </div>
        </div>
      </Container>
      <section>
        <div className="treading-collection">
          <h1>Treading Collection</h1>
          <div className="treading-btn">
            <button>New Arrivals</button>
          </div>
          <div className="treading-cart">
            <div className="treading-row">
              {dresses.map((dress, index) => {
                return (
                  <div key={index} className="treading-column">
                    <img src={dress.image} alt="" />
                    <div className="treading-cart-details">
                      <h2>{dress.name}</h2>
                      <p>₹ {dress.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="treading-more-btn">
            <button onClick={handlePage}>View More</button>
          </div>
        </div>
      </section>
      <Container>
        <div className="offer-div">
          <div className="offer-img">
            <img src={OfferImage} alt="" />
          </div>
          <div className="offer-details">
            <h2>Deal Of The Day</h2>
            <h4>Buy 2 Get 1 offer</h4>
            <div className="offer-coupon">
              <p>Use This Coupon :</p>
              <button onClick={handleCopy}>{coupon} 📋</button>
              {copied && <h6>Copied </h6>}
            </div>
            <div className="offer-timer">
              <h1>Time Left: {formatTime(time)}</h1>
            </div>
            <div className="offer-btn">
              <button onClick={handlePage}>Shop Now</button>
            </div>
          </div>
        </div>
      </Container>
      <section className="gird-section">
        <h1 className="gird-title">Follow Us on Instagram</h1>
        <div className="gird-container">
          <div className="gird-images">
            <img src="src/assets/gird-1.jpg" alt="" />
            <img src="src/assets/gird-2.jpg" alt="" />
            <img src="src/assets/gird-3.jpg" alt="" />
            <img src="src/assets/gird-4.jpg" alt="" />
            <img src="src/assets/gird-6.jpg" alt="" />
            <img src="src/assets/gird-5.jpg" alt="" />
          </div>
          <div className="gird-details">
            <h1>#FashionHub</h1>
            <p>
              The dress shop we visited was not far from her house and was one
              of the largest in the city. When I saw the size of the structure,
              I couldn't help but drop my jaw. It was the length of ten houses
              in my Neigh. As we got closer to the door, I noticed a rush of
              frigid air coming from within. It was a unique experience for me
              because I was not used to air conditioning.
            </p>
          </div>
        </div>
      </section>
      <Container>
        <div className="shop-feature">
          <div className="delivery">
            <img src="src/assets/delivery-icon.png" alt="" />

            <p>
              Free & Fast delivery <br /> on all orders
            </p>
          </div>
          <div className="payment">
            <img
              src="src/assets/290142_business_card_cash_credit_money_icon.png"
              alt=""
            />

            <p>
              All UPI Payments <br /> Accepted
            </p>
          </div>
          <div className="online">
            <img src="src/assets/online-icon.png" alt="" />

            <p>
              24/7 Hr Online <br /> Support
            </p>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CustomCarousel;
