import React from "react";
import styles from "./NewsSection.styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import Img from "next/image";
import Link from "@mui/material/Link";

const NewsSectionComponent = ({ t, data }) => {
  // console.log("data", data);
  return (
    <>
    <Typography variant={'h2'}>{t('News')}</Typography>
    <Grid container spacing={4}>
      {data.map((newsItem) => {
        return <NewsItem key={newsItem.slug.current} {...newsItem} />;
      })}
    </Grid>
      </>
  );
};

export default NewsSectionComponent;

const NewsItem = ({ mainImage, title }) => {
  const imageProps = useNextSanityImage(client, mainImage);
  // console.log(imageProps);
  return (
    <Grid item xs={4} >
      <Link>
        <Img
          {...imageProps}
          layout="responsive"
          // height={500}
          objectFit={"cover"}
        />
        <Typography>{title}</Typography>
      </Link>
    </Grid>
  );
};
