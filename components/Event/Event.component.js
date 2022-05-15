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

const EventComponent = ({ t, event }) => {
  const { title, categories, body, mainImage, shows, reviews } = event;
  const imageProps = useNextSanityImage(client, mainImage);
  return (
    <Box sx={styles.wrapper}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">{t(title)}</Typography>
          <Box sx={styles.chipArea}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                sx={styles.chip}
                color={"info"}
                variant={"filled"}
                size={"small"}
              />
            ))}
          </Box>
          <PortableText
            value={body}
            components={{
              block: {
                normal: ({ children }) => (
                  <Typography variant="body1" sx={styles.p}>
                    {children}
                  </Typography>
                ),
              },
            }}
          />
          <Typography
            sx={styles.performancesText}
            variant={"h3"}
            color={"highlight.main"}
          >
            {t("Performances")}
          </Typography>
          <Box sx={styles.showsArea}>
            
          {shows.map(
            (
              { buyTicketsLink, eventLink, eventName, eventStartTime, venue },
              i
            ) => {
              const dateString = `${new Date(eventStartTime).toLocaleDateString(
                "en-GB",
                {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }
              )}`;
              return (
                <Box
                  key={`${eventStartTime}-${eventName}`}
                  sx={styles.eventList}
                >
                  <Box sx={styles.eventHead}>
                    <Typography variant="h4">{t(eventName)}</Typography>
                  </Box>
                  <Box sx={styles.eventHeadDate}>
                    <Typography variant="body1" sx={styles.date}>
                      {`${dateString}`}
                    </Typography>
                    {buyTicketsLink && (
                      <Button
                        size={"small"}
                        href={buyTicketsLink}
                        variant={"contained"}
                        endIcon={<ChevronRightIcon />}
                        color={"black"}
                      >
                        <Typography sx={styles.buttonLbl} variant="h6">
                          {t("Get Tickets")}
                        </Typography>
                      </Button>
                    )}
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
                          color={"background"}
                        >
                          <Typography sx={styles.buttonLbl} variant="h6">
                            {t("More info")}
                          </Typography>
                        </Button>
                      )}
                    </Box>
                  </Box>
                  {shows.length - 1 !== i && <Box sx={styles.divider} />}
                </Box>
              );
            }
          )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={styles.eventImage}>
          <Img {...imageProps} layout="responsive" objectFit={"cover"} />
          {reviews.map(({ from, quote, reviewLink, stars }) => {
            return (
              <Box key={quote} sx={styles.reviewSection}>
                <Typography variant="h6" sx={styles.reviewBody}>
                  {t(from)}
                </Typography>
                <Box sx={styles.review}>
                  <Typography variant="caption" sx={styles.caption}>
                    {t(`"${quote}"`)}
                  </Typography>
                  <Rating name="read-only" value={stars} readOnly />
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventComponent;
