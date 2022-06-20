import React from "react";
import styles from "./StartAnimation.styles";
import  Box from '@mui/material/Box';

const StartAnimationComponent = ({ t }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.circle}/>
    </Box>
  );
};

export default StartAnimationComponent;
