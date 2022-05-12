import React from "react";
import styles from "./HomePage.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import Img from "next/image";
import NewsSection from "../NewsSection";
import PortfolioSection from "../PortfolioSection";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import Event from "../Event";

const HomePageComponent = ({
  t,
  heroImage,
  aboutMe,
  body,
  title,
  education,
  news,
  portfolio,
  landOfLostContent,
}) => {
  console.log("LOLC", landOfLostContent);
  const imageProps = useNextSanityImage(client, heroImage);
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h1" color={'primary'}>{t("HenryMadd")}</Typography>
        </Box>
        <Box sx={styles.tagLineWrap}>
          <Typography variant="body1">
            {t("SPOKEN WORD ARTIST • THEATRE MAKER • WORKSHOP FACILITATOR")}
          </Typography>

          <Box>
            <Link
              href="https://www.facebook.com/HMADDSpokenWord/"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/henrymaddpoet/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </Link>
          </Box>
        </Box>
          <Box sx={styles.desktopMenu}>
            <Link href="" sx={styles.menuLink}> <Typography variant="h6" color={'action.main'}>{t("About Me")}</Typography></Link>
            <Link href="" sx={styles.menuLink}> <Typography variant="h6" color={'action.main'}>{t("Land Of Lost Content")}</Typography></Link>
            <Link href="" sx={styles.menuLink}> <Typography variant="h6" color={'action.main'}>{t("What's Happening")}</Typography></Link>
            <Link href="" sx={styles.menuLink}> <Typography variant="h6" color={'action.main'}>{t("WorkShops")}</Typography></Link>
            <Link href="" sx={styles.menuLink}> <Typography variant="h6" color={'action.main'}>{t("Portfolio")}</Typography></Link>
            <Link href="" sx={styles.menuLink}> <Typography variant="h6" color={'action.main'}>{t("Gallery")}</Typography></Link>
          </Box>
        <Img
          {...imageProps}
          layout="responsive"
          // height={500}
          objectFit={"cover"}
        />
        <Typography variant={"h2"} color={'primary'}>{t("About Me")}</Typography>
        <PortableText
          value={aboutMe}
          components={{
            block: {
              p: ({ children }) => <h1 className="text-2xl">{children}</h1>,
            },
          }}
        />
        <Typography variant={"h2"} color={'primary'}>{t("Events")}</Typography>
        <Event event={landOfLostContent} />
        {/* <LandOfLostContent data={landOfLostContent}/> */}
        <NewsSection data={news} />
        <Typography variant={"h2"} color={'primary'}>{t("Workshops")}</Typography>
        <PortableText value={education} />
        <PortfolioSection data={portfolio} />
      </Box>
    </>
  );
};

export default HomePageComponent;
