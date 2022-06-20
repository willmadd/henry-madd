import DesktopNavComponent from "./DesktopNav.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const DesktopNavContainer = (props) => {
  const { t } = useTranslation();

  const containerFunctions = { t };

  const containerProps = {};

  return (
    <DesktopNavComponent {...props} {...containerProps} {...containerFunctions} />
  );
};
export default DesktopNavContainer;

DesktopNavContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

DesktopNavContainer.defaultProps = {
  sample: "this is a sample string",
};
