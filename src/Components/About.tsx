import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import "./About.css";
import CountUp from "react-countup";
import memberOne from "../assets/member-1.jpg";
import memberTwo from "../assets/member-2.jpg";
import memberThree from "../assets/member-3.jpg";
import memberFour from "../assets/member-4.jpg";
import Footer from "./Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
export default function About() {
  const images = [
    {
      url: "src/assets/dress.jpg",
      title: "Dresses",
      width: "40%",
    },
    {
      url: "src/assets/shoe-1.jpg",
      title: "Shoes",
      width: "30%",
    },
    {
      url: "src/assets/Accessories.jpg",
      title: "Accessories",
      width: "30%",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <div className="about-img">
          <h1>About Us</h1>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" variant="h6">
              Who We Are ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Contextual advertising programs sometimes have strict policies
              that need to be adhered too. Let’s take Google as an example.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" variant="h6">
              Who We Do ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In this digital generation where information can be easily
              obtained within seconds, business cards still have retained their
              importance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  className="accordion">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" variant="h6">
              Why Choose Us
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A two or three storey house is the ideal way to maxi-mise the
              piece of earth on which our home sits, but for older or infirm
              people.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    
      <Container>
        <div className="stats-container">
          <div className="stat">
            <CountUp end={90} duration={6} className="number"></CountUp>
            <span className="label">Our Clients</span>
          </div>
          <div className="stat">
            <CountUp end={30} duration={7} className="number"></CountUp>

            <span className="label">Total Categories</span>
          </div>
          <div className="stat">
            <CountUp end={102} duration={7} className="number"></CountUp>

            <span className="label">In Country</span>
          </div>
          <div className="stat">
            <CountUp end={15} duration={7} className="number"></CountUp>

            <span className="label">Branches</span>
          </div>
        </div>
        <div className="about-line"></div>
      </Container>

      <section>
        <div className="team-members">
          <h3>Our Team</h3>
          <h1>Meet Our Team</h1>
          <div className="member-div">
            <div className="members">
              <div className="member-1">
                <img src={memberOne} alt="" />
                <h1>John Smith</h1>
                <p>C.E.O</p>
              </div>
              <div className="member-2">
                <img src={memberTwo} alt="" />
                <h1>Christine Wise</h1>
                <p>Manager</p>
              </div>
              <div className="member-3">
                <img src={memberThree} alt="" />
                <h1>Elisha </h1>
                <p>Fashion Designer</p>
              </div>
              <div className="member-4">
                <img src={memberFour} alt="" />
                <h1>Keyster Ritter</h1>
                <p>Tailor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="testimonial">
          <blockquote>
            <p>
              "Going out after work? Take your butane curling iron with you to
              the office, heat it up, style your hair before you leave the
              office and you won’t have to make a trip back home."
            </p>
            <div className="author">
              <img
                src="src/assets/rounded-men.png"
                alt="Profile"
                className="profile-pic"
              />
              <div>
                <strong>Augusta Schultz</strong>
                <br />
                <span className="designation">Fashion Design</span>
              </div>
            </div>
          </blockquote>
        </div>
        <div className="image-section">
          <img
            src="src/assets/testimonial.jpg"
            alt="Camping Scene"
            className="camping-img"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
