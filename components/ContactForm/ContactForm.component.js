import React, { useState } from "react";
import styles from "./ContactForm.styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useForm, ValidationError } from "@formspree/react";
import Grid from "@mui/material/Grid";

const ContactFormComponent = ({ t, sectionRef }) => {
  const [state, handleSubmit] = useForm("moqrbaoz");
  const [phone, setPhone] = useState("");

  return (
    <Box sx={styles.wrapper} ref={sectionRef}>
      <Typography variant={"h2"} sx={styles.title} color={"highlight.main"}>
        {t("Contact Me")}
      </Typography>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={6}>
          {state.succeeded ? (
            <Typography
              variant={"body1"}
              sx={styles.succeeded}
              color={"tomato.main"}
            >
              {t("Your message has been sent")}
            </Typography>
          ) : (
            <Stack
              component={"form"}
              onSubmit={phone ? (e) => e.preventDefault() : handleSubmit}
            >
              <label htmlFor="email">
                <Typography
                  variant="h4"
                  color="tomato.main"
                  sx={styles.formLabels}
                >
                  Email Address
                </Typography>
              </label>
              <input id="email" type="email" name="email" />
              <Box sx={styles.phone}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor={'message'}>

              <Typography
                variant="h4"
                color="tomato.main"
                sx={styles.formLabels}
                >
                Message
              </Typography>
                </label>
              <textarea id="message" name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <Button
                size={"small"}
                variant={"contained"}
                color={"highlight"}
                type="submit"
                disabled={state.submitting}
                sx={styles.btn}
              >
                <Typography sx={styles.buttonLbl} variant="h6">
                  {t("Send Message")}
                </Typography>
              </Button>
              {/* </form> */}
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant={"body1"} sx={styles.body} color={"tomato"}>
            {t(
              "Please email for any inquiries regarding bookings, performances and workshops! Henry will typically respond within 24 hours."
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactFormComponent;
