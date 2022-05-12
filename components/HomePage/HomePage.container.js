import HomePageComponent from "./HomePage.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const HomePageContainer = (props) => {
  const { t } = useTranslation();
('PP',props)
  const containerFunctions = { t };

  const containerProps = {};

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
