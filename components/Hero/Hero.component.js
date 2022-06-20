import React from "react";
import styles from "./Hero.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Img from "next/image";
import { PortableText } from "@portabletext/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Container from "@mui/material/Container";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import one from "./img/one-1.webp";

const HeroComponent = ({
  t,
  image,
  text,
  sectionRef,
}) => {
  return (
    <Container sx={styles.wrapper} ref={sectionRef}>
      <Box sx={styles.centerPosition}>
        <Box sx={styles.imageSpacer}>
          <Box sx={styles.image}>
            <Img
              src={image}
              height={"100%"}
              width={"100%"}
              layout="responsive"
              alt=""
              objectFit={"cover"}
              placeholder="blur"
            />
            <Box sx={styles.socials}>
              <Typography sx={styles.followMe} variant={"h5"} color={"earth"}>
                {t("Follow Me")}
              </Typography>
              <Link
                href="https://www.instagram.com/henrymaddpoet/"
                target="_blank"
                rel="noopener"
                aria-label={"Instagram"}
              >
                <InstagramIcon
                  color={"highlight"}
                  sx={styles.socialIcon}
                  alt="Instagram"
                />
              </Link>
              <Link
                href="https://www.facebook.com/HMADDSpokenWord/"
                target="_blank"
                rel="noopener"
                aria-label={"Facebook"}
              >
                <FacebookIcon
                  color={"highlight"}
                  sx={styles.socialIcon}
                  alt="Facebook"
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.info}>
          <Typography variant="h1" sx={styles.title}>
            {t("Henry Madd")}
          </Typography>
          <Typography variant="h6" sx={styles.tag}>
            {t("SPOKEN WORD ARTIST • THEATRE MAKER • WORKSHOP FACILITATOR")}
          </Typography>
          <PortableText
            value={text}
            components={{
              block: {
                normal: ({ children }) => (
                  <Typography variant="body1" sx={styles.p}>
                    {children}
                  </Typography>
                ),
              },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroComponent;

const FlickerImage = ({ img }) => {
  const imageProps = useNextSanityImage(client, img.featureImage);
  return <Img {...imageProps} />;
};
