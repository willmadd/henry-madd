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
      <meta name="description" content="Henry Madd is an award-winning poet, educator and theatre maker born in the West Midlands now operating in Margate. His work, rooted in his rural upbringing, veers from the heart-warming to the heart wrenching, always with a healthy dose of comedy woven in.

" />
      <meta name="keywords" content="Poet, HenryMadd, Spoken Word, Land of lost content" />
      <meta name="author" content="Henry Madd" />
    </Head>
  );
};

export default HeadImportsComponent;
