import React from "react";
import styles from "./NewsSection.styles";
import Grid from "@mui/material/Grid";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import Img from "next/image";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NewsSectionComponent = ({ t, data }) => {

  return (
    <>
      <Typography variant={"h2"} sx={styles.sectionTitle}>
        {t("What's Happening")}
      </Typography>
      <Grid container spacing={8}>
        {data.map((newsItem) => {
          return <NewsItem key={newsItem.slug.current} {...newsItem} />;
        })}
      </Grid>
    </>
  );
};

export default NewsSectionComponent;

const NewsItem = ({ mainImage, title, slug:{current}, excerpt }) => {
  const imageProps = useNextSanityImage(client, mainImage);
  return (
    <Grid item xs={4}>
      <Card sx={styles.cardContent}>
        <Img
          {...imageProps}
          layout="responsive"
          // height={500}
          objectFit={"cover"}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            <Typography sx={styles.cardTitle} variant={'h5'}>{title}</Typography>
          </Typography>
          <Typography variant="body1" color="background.main">
            {excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button href={`/${current}`} size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
