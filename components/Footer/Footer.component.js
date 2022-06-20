import Box  from "@mui/material/Box";
import React from "react";
import styles from "./Footer.styles";

const FooterComponent = ({ t }) => {
  return (
<Box sx={styles.footer} component={'footer'}>{t(`© Henry Madd ${new Date().getFullYear()}`)}</Box>
  );
};

export default FooterComponent;
