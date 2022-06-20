import PotfolioPageComponent from "./PotfolioPage.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router'
const PotfolioPageContainer = (props) => {
  const { t } = useTranslation();
  const router = useRouter()

  const containerFunctions = { t };

  const containerProps = {router};

  return (
    <PotfolioPageComponent {...props} {...containerProps} {...containerFunctions} />
  );
};
export default PotfolioPageContainer;

PotfolioPageContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

PotfolioPageContainer.defaultProps = {
  sample: "this is a sample string",
};
