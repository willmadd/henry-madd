import React from "react";
import styles from "./Event.styles";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { RemoveFromQueue } from "@mui/icons-material";

const EventComponent = ({ t, event }) => {
  const { title, categories, body, mainImage, shows, reviews } = event;
  const imageProps = useNextSanityImage(client, mainImage);
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h3">{t(title)}</Typography>
      {categories.map((cat) => (
        // <Chip color="primary" label="Chip Outlined" variant="outlined" />
        // <Typography variant="h3">{t(cat)}</Typography>
        <Chip
          key={cat}
          label={cat}
          sx={styles.chip}
          color={"info"}
          variant={"filled"}
          size={"small"}
        />
      ))}
      <Grid container spacing={4}>
        <Grid item xs={6} sx={styles.eventImage}>
          <Img {...imageProps} layout="responsive" objectFit={"cover"} />
          {reviews.map(({ from, quote, reviewLink, stars }) => {
            return (
              <Box key={quote} sx={styles.reviewSection}>
                <Typography variant="h6">{t(from)}</Typography>
                <Box sx={styles.review}>

                <Typography variant="caption" sx={styles.caption}>{t(`"${quote}"`)}</Typography>
                <Rating name="read-only" value={stars} readOnly />
                </Box>
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={6}>
          <PortableText value={body} />
          {shows.map(
            ({
              buyTicketsLink,
              eventLink,
              eventName,
              eventStartTime,
              venue,
            }) => {
              return (
                <Box
                  key={`${eventStartTime}-${eventName}`}
                  sx={styles.eventList}
                >
                  <Box sx={styles.eventHead}>
                    <Typography variant="h6">{t(eventName)}</Typography>
                    <Typography variant="body1" sx={styles.date}>
                      {` - ` +
                        t(
                          new Date(eventStartTime).toLocaleDateString("en-GB", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })
                        )}
                    </Typography>
                  </Box>
                  <Box sx={styles.eventHeadDate}>
                    <Typography variant="body1">{t(venue)}</Typography>
                    <Box>
                      {eventLink && (
                        <Button
                          sx={styles.action}
                          size={"small"}
                          href={eventLink}
                          variant={"text"}
                          endIcon={<ChevronRightIcon />}
                          color={'action'}
                        >
                          <Typography sx={styles.buttonLbl} variant="h6">
                            {t("More info")}
                          </Typography>
                        </Button>
                      )}
                      {buyTicketsLink && (
                        <Button
                          size={"small"}
                          href={buyTicketsLink}
                          variant={"text"}
                          endIcon={<ChevronRightIcon />}
                          color={'action'}
                        >
                          <Typography sx={styles.buttonLbl} variant="h6">
                            {t("Get Tickets")}
                          </Typography>
                        </Button>
                      )}
                    </Box>
                  </Box>
                  {/* <Typography variant="body1">{t(eventLink)}</Typography>
                  <Typography variant="body1">{t(buyTicketsLink)}</Typography> */}
                </Box>
              );
            }
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventComponent;
