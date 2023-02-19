import React from "react";
import styles from "./PortfolioSection.styles";
import client from "../../client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";

const PortfolioSectionComponent = ({
  t,
  data,
  modalContent,
  sectionRef,
  ...rest
}) => {
  return (
    <Box sx={styles.wrapper}>
      {modalContent.length > 0 && <Modal />}
      <Typography variant={"h2"} color={"highlight.main"} sx={styles.sectionTitle}>
        {t("Portfolio")}
      </Typography>
      <Grid container spacing={4} ref={sectionRef}>
        {data.map((portfolioItem) => {
          return (
            <PortfolioItem
              key={portfolioItem.slug.current}
              {...portfolioItem}
              {...rest}
              t={t}
            />
          );
        })}
      </Grid>
      </Box>
  );
};

export default PortfolioSectionComponent;

const PortfolioItem = ({ mainImage, title, body, t, setModalContent, slug }) => {

  const imageProps = useNextSanityImage(client, mainImage);
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} sx={styles.portfolioItem}>
      <Box sx={styles.imageWrapper}>
        <Img {...imageProps} layout="fill" objectFit={"cover"} alt={`${title} henry madd`}/>
      </Box>
      <Box sx={styles.titleArea}>
        <Typography variant={"h5"} sx={styles.title}>
          {title}
        </Typography>
        <Box sx={{ flex:1 }}></Box>
        <Button href={`/${slug.current}`}>{t("View page")}</Button>
      </Box>
    </Grid>
  );
};

const Modal = (body) => {
  return (
    <Box sx={styles.modalWrapper}>
      <PortableText
        value={body}
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
  );
};
