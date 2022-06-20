import HomePageComponent from "./HomePage.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";

const HomePageContainer = (props) => {
  const { t } = useTranslation();

    const eventsRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const workshopRef = useRef();
  const contactRef = useRef();

  const refs = { eventsRef, aboutRef, portfolioRef, workshopRef, contactRef };

  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { refs });
    }
    return child;
  });

  const handleMenuClick = (refName) => {
    refs[refName].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const containerFunctions = { t, handleMenuClick };

  const containerProps = {childrenWithProps, refs};

  return (
    <HomePageComponent {...props} {...containerProps} {...containerFunctions} />
  );
};
export default HomePageContainer;

HomePageContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

HomePageContainer.defaultProps = {
  sample: "this is a sample string",
};
