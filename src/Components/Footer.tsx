import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Fashion Hub</h3>
        <p>
          The customer is at the heart of our unique business model, which
          includes design.
        </p>
        <div className="payment-icons">
         
          <img
            src="src/assets/1156753_finance_payment_visa_icon.png"
            alt="American Express"
          />
          <img
            src="src/assets/google-pay-icon.png"
            alt="PayPal"
          />
          <img src="src/assets/pay-tm-icon.png" alt="" />
        </div>
      </div>
      <div>
        <h3>SHOPPING</h3>
        <p>Clothing Store</p>
        <p>Trending Shoes</p>
        <p>Accessories</p>
        <p>Sale</p>
      </div>
      <div>
        <h3>SHOPPING</h3>
        <p>Contact Us</p>
        <p>Payment Methods</p>
        <p>Delivery</p>
        <p>Return & Exchanges</p>
      </div>
      <div>
        <h3>Address</h3>
        <p>123 Old Church Street America</p>
              <p>+44 5647856</p>
              <p>fashionhub@gmail.com</p>
              <div className="social-media-icons">
                  <img src="src/assets/instagram.png" alt="" />
                  <img src="src/assets/what-app.png" alt="" />
                  <img src="src/assets/4102573_applications_facebook_media_social_icon.png" alt="" />
              </div>
      </div>
    </footer>
  );
};

export default Footer;
