import React from "react";
import styles from "./GlobalLayout.styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HeadImports from "../HeadImports";

import Footer from "../Footer";

const GlobalLayoutComponent = ({
  t,
  children,
  refs,
  handleMenuClick,
}) => {
  return (
    <Box sx={styles.page}>
      
      <HeadImports />

      <Box sx={styles.wrapper}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default GlobalLayoutComponent;
