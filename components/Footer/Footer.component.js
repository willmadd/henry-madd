import React from "react";
import styles from "./Footer.styles";
import { Box, Typography } from '@mui/material';

const FooterComponent = ({ t }) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="body">{t("Footer Component")}</Typography>
    </Box>
  );
};

export default FooterComponent;
