import React from "react";
import styles from "./Menu.styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const MenuComponent = ({ t, menuOpen, setMenuOpen, refs, handleMenuItem }) => {
  return (
    <Box sx={styles.wrapper(menuOpen)}>
      <Box sx={styles.menuArea(menuOpen)}>
        <Box sx={styles.header(menuOpen)}>
          <Typography variant="h2" sx={styles.title(menuOpen)}>
            {t("Henry Madd")}
          </Typography>
          <Button onClick={() => setMenuOpen((prev) => !prev)}>
            {!menuOpen ? (
              <MenuIcon sx={styles.burger(menuOpen)} />
            ) : (
              <CloseIcon sx={styles.burger(menuOpen)} />
            )}
          </Button>
        </Box>
        {menuOpen && (
          <>
            <Stack sx={styles.menu}>
              <Button sx={styles.button} onClick={() => handleMenuItem('aboutRef')}>{t("About me")}</Button>
              <Button sx={styles.button} onClick={() => handleMenuItem('eventsRef')}>
                {t("Events")}
              </Button>
              <Button sx={styles.button} onClick={() => handleMenuItem('portfolioRef')}>{t("Portfolio")}</Button>
              <Button sx={styles.button} onClick={() => handleMenuItem('workshopRef')}>{t("Workshops")}</Button>
              <Button sx={styles.button} onClick={() => handleMenuItem('contactRef')}>{t("Contact ")}</Button>
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
};

export default MenuComponent;
