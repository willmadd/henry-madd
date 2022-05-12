import React from "react";
import styles from "./GlobalLayout.styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HeadImports from "../HeadImports";

const GlobalLayoutComponent = ({ t, children }) => {
  return (
    <Box sx={styles.page}>
      <Container sx={styles.wrapper}>{children}</Container>
    </Box>
  );
};

export default GlobalLayoutComponent;
