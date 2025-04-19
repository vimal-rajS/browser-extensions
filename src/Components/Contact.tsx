import "./Contact.css";
import Navbar from "./Navbar";
import { Container } from "@mui/material";
import Footer from "./Footer";
function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="background">
        <div className="contact-bg">
          <h1>Contact</h1>
        </div>
      </section>
      <Container>
        <div className="feedback">
          <h1>Feedback</h1>
          <div className="feedback-form">
            <form action="" className="feedback-container">
              <label htmlFor="name" className="form-name">
                Name : <input id="name" placeholder="Username"></input>
              </label>
              <label htmlFor="email" className="form-email">
                Email :
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Username@gmail.com"
                />
              </label>
              <label htmlFor="phone-number">
                Number :{" "}
                <input type="type" id="number" placeholder="Phone Number" />
              </label>
              <label htmlFor="" className="form-description">
                Feedback :{" "}
              </label>{" "}
              <br />
              <textarea
                id="description"
                name="description"
               
              ></textarea>
              <div className="form-submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
