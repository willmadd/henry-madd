import React from "react";
import styles from "./PortfolioSection.styles";
import client from "../../client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";

const PortfolioSectionComponent = ({ t, data }) => {
  return (
    <>
      <Typography variant={"h2"}>{t("Portfolio")}</Typography>
      <Grid container spacing={4}>
        {data.map((portfolioItem) => {
          return (
            <PortfolioItem
              key={portfolioItem.slug.current}
              {...portfolioItem}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default PortfolioSectionComponent;

const PortfolioItem = ({ mainImage, title, body }) => {
  const imageProps = useNextSanityImage(client, mainImage);
  // console.log(body);
  return (
    <Grid item xs={4}>
      <Link>
        <Img
          {...imageProps}
          layout="responsive"
          // height={500}
          objectFit={"cover"}
        />
        <Typography>{title}</Typography>
        <PortableText value={body}/>
      </Link>
    </Grid>
  );
};
