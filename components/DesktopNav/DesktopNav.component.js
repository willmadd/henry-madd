import React from "react";
import styles from "./DesktopNav.styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const DesktopNavComponent = ({ t, handleMenuClick }) => {
  return (
    <Box sx={styles.wrapper}>
      <Button sx={styles.button} onClick={() => handleMenuClick("contactRef")}>
        {t("Contact ")}
      </Button>
      <Button sx={styles.button} onClick={() => handleMenuClick("workshopRef")}>
        {t("Workshops")}
      </Button>
      <Button sx={styles.button} onClick={() => handleMenuClick("portfolioRef")}>
        {t("Portfolio")}
      </Button>
      <Button sx={styles.button} onClick={() => handleMenuClick("eventsRef")}>
        {t("Events")}
      </Button>
      <Button sx={styles.button} onClick={() => handleMenuClick("aboutRef")}>
        {t("About me")}
      </Button>
    </Box>
  );
};

export default DesktopNavComponent;
