import React from "react";
import styles from "./HeadImports.styles";
import Head from "next/head";

const HeadImportsComponent = ({ t }) => {
  return (
    <Head>
      <title>
        {t(
          "Henry Madd | SPOKEN WORD ARTIST • THEATRE MAKER • WORKSHOP FACILITATOR"
        )}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charset="UTF-8" />
      <meta
        name="description"
        content="Henry Madd is an award-winning poet, educator and theatre maker born in the West Midlands now operating in Margate. His work, rooted in his rural upbringing, veers from the heart-warming to the heart wrenching, always with a healthy dose of comedy woven in."
      />
      <meta
        name="keywords"
        content="Poet, HenryMadd, Spoken Word, Land of lost content"
      />
      <meta name="author" content="Henry Madd" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta property="og:title" content="Henry Madd | SPOKEN WORD ARTIST • THEATRE MAKER • WORKSHOP FACILITATOR" />
      <meta property="og:description" content="Henry Madd is an award-winning poet, educator and theatre maker born in the West Midlands now operating in Margate. His work, rooted in his rural upbringing, veers from the heart-warming to the heart wrenching, always with a healthy dose of comedy woven in." />
      <meta property="og:image" content="/images/ogimage.jpg" />
    </Head>
  );
};

export default HeadImportsComponent;
