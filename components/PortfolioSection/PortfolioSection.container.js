import PortfolioSectionComponent from "./PortfolioSection.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const PortfolioSectionContainer = (props) => {
  const [modalContent, setModalContent] = useState([]);

  const { t } = useTranslation();

  const handleCloseModal = () =>{
    setModalContent([])
  }

  const containerFunctions = { t, handleCloseModal, setModalContent };

  const containerProps = {modalContent};

  return (
    <PortfolioSectionComponent
      {...props}
      {...containerProps}
      {...containerFunctions}
    />
  );
};
export default PortfolioSectionContainer;

PortfolioSectionContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

PortfolioSectionContainer.defaultProps = {
  sample: "this is a sample string",
};
