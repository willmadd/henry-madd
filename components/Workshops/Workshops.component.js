import React from "react";
import styles from "./Workshops.styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import client from "../../client";
const WorkshopsComponent = ({ t, data, image }) => {
  const imageProps = useNextSanityImage(client, image);
  return (
    <Box sx={styles.wrapper}>
      <Typography variant={"h2"} sx={styles.title} color={"primary"}>
        {t("Workshops")}
      </Typography>
      <Box>
        <Box sx={styles.textArea}>
          <PortableText
            components={{
              block: {
                normal: ({ children }) => (
                  <Typography variant="body1" sx={styles.p}>
                    {children}
                  </Typography>
                ),
              },
            }}
            value={data}
          />
          <Box sx={styles.imageWrap}>
            <Img
              {...imageProps}
              layout="responsive"
              // height={500}
              objectFit={"cover"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkshopsComponent;
