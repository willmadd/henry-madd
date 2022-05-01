import React from "react";
import styles from "./HomePage.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PortableText } from "@portabletext/react";

const HomePageComponent = ({ t, article }) => {
  return (
    <>
    <Box>
      <Typography>

    {t('welcome to')}
      </Typography>

    </Box>
      {/* <h1>{article.title}</h1>
      <PortableText value={article.body} /> */}
    </>
  );
};

export default HomePageComponent;
