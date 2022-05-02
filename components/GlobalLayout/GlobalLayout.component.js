import React from "react";
import styles from "./GlobalLayout.styles";
import { Box, Typography } from '@mui/material';
import HeadImports from '../HeadImports';

const GlobalLayoutComponent = ({ t, children }) => {
  return (
    <Box sx={styles.wrapper}>
      {/* <HeadImports /> */}
      <Typography variant="body">{t("GlobalLayout Component")}</Typography>
      {children}
    </Box>
  );
};

export default GlobalLayoutComponent;
