import React from "react";
import bgVideo from "../../images/office-video.mp4";
import bgVideoTwo from "../../images/office-video2.webm";
import bgVideoImg from "../../images/office-video-capture.JPG";
import { ButtonS } from "../../reuseableComponents/buttonStyle";
import {
  Container,
  BackgroundVideoContainer,
  TextContainer,
  Text,
  Header,
  CtaGroup,
  GhostButton,
} from "./homeStyle";

function Home() {
  return (
    <Container>
      <BackgroundVideoContainer>
        <video autoPlay muted loop playsInline poster={bgVideoImg}>
          <source src={bgVideo} type="video/mp4" />
          <source src={bgVideoTwo} type="video/webm" />
          Your browser is not supported!
        </video>
      </BackgroundVideoContainer>
      <TextContainer>
        <Text>
          <h3 data-aos="fade-right">
            <em>Quality Never goes out of Style</em>
          </h3>
          <Header data-aos="zoom-in">
            <h1>
              <span>The Luxurious</span> <br />
              <span className="subHeader yellow"> Nail</span>
              <span className="subHeader"> Experience</span>
            </h1>
          </Header>
          <h6>Click the button to book an appointment with us</h6>
          <CtaGroup>
            <ButtonS
              padding="1.3rem 3rem"
              width="fit-content"
              fs="1.6rem"
              to="/my-appointments"
            >
              START BOOKING
            </ButtonS>
            <GhostButton to="/about-us">EXPLORE SERVICES</GhostButton>
          </CtaGroup>
        </Text>
      </TextContainer>
    </Container>
  );
}

export default Home;
