import React from "react";
import styles from "./Header.styles";
import { Box, Typography } from '@mui/material';

const HeaderComponent = ({ t }) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="body">{t("Header Component")}</Typography>
    </Box>
  );
};

export default HeaderComponent;
