import React from "react";
import styles from "./Hero.styles";
import { Box, Link, Typography } from "@mui/material";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const HeroComponent = ({ t, image, text }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.centerPosition}>
        <Box sx={styles.imageSpacer}>
          <Box sx={styles.image}>
            <Image
              src={image}
              height={'100%'}
              width={'100%'}
              layout="responsive"
              alt=""
              objectFit={'cover'}
            />
          <Box sx={styles.socials}>
            <Typography sx={styles.followMe} variant={'h5'} color={"earth"}>{t('Follow Me')}</Typography>
            <Link
              href="https://www.instagram.com/henrymaddpoet/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon color={"earth"} sx={styles.socialIcon}/>
            </Link>
            <Link
                href="https://www.facebook.com/HMADDSpokenWord/"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon color={"earth"} sx={styles.socialIcon}/>
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
    </Box>
  );
};

export default HeroComponent;
