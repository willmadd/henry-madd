import React from "react";
import styles from "./HomePage.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import NewsSection from "../NewsSection";
import PortfolioSection from "../PortfolioSection";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import Event from "../Event";
import Hero from "../Hero";
import Workshops from "../Workshops";
import ContactForm from "../ContactForm";
import StartAnimation from "../StartAnimation";
import Menu from "../Menu";
import DesktopNav from "../DesktopNav";
import  Container from "@mui/material/Container";

const HomePageComponent = ({
  t,
  heroImage,
  aboutMe,
  education,
  news,
  portfolio,
  landOfLostContent,
  refs,
  handleMenuClick,
  featureImages
}) => {
  return (
    <>
      <StartAnimation />
      <Menu refs={refs} handleMenuClick={handleMenuClick} />
      <DesktopNav refs={refs}  handleMenuClick={handleMenuClick} />
      <Container>
        <Hero text={aboutMe} featureImages={featureImages} sectionRef={refs.aboutRef} />
        <Box sx={styles.about}></Box>
        <Typography
          variant={"h2"}
          color={"highlight.main"}
          sx={styles.sectionTitle}
        >
          {t("Events")}
        </Typography>
        <Event event={landOfLostContent} sectionRef={refs.eventsRef} />
        {news.length > 0 && <NewsSection data={news} />}

        <PortfolioSection data={portfolio} sectionRef={refs.portfolioRef} />
        <Workshops
          data={education}
          image={heroImage}
          sectionRef={refs.workshopRef}
        />

        <ContactForm sectionRef={refs.contactRef} />
      </Container>
    </>
  );
};

export default HomePageComponent;
