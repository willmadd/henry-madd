import React from "react";
import styles from "./HeadImports.styles";
import Head from "next/head";

const HeadImportsComponent = ({ t }) => {
  return (
    <Head>
      <title>
        {t("Curious Atlas | Discover the Curious World We Live In")}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default HeadImportsComponent;
