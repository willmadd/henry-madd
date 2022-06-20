import React from "react";
import styles from "./PotfolioPage.styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import Img from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const PortfolioPageComponent = ({ t, title, body, mainImage, router }) => {
  const imageProps = useNextSanityImage(client, mainImage);
  return (
    <Container sx={styles.wrapper}>
      <Typography variant="h2" color={"tomato.main"} sx={styles.title}>
        {title}
      </Typography>
      <Img {...imageProps} layout="responsive" objectFit={"cover"} />
      <Box sx={styles.body}>
        <PortableText value={body} />
      </Box>
      <Button sx={styles.backBtn} href={'/'} startIcon={<ArrowBackIcon/>} variant={'text'} size={'large'} color={"highlight"}>{t('Go Back')}</Button>
    </Container>
  );
};

export default PortfolioPageComponent;
