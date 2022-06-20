import ContactFormComponent from "./ContactForm.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ContactFormContainer = (props) => {
  const { t } = useTranslation();

  const containerFunctions = { t };

  const containerProps = {};

  return (
    <ContactFormComponent {...props} {...containerProps} {...containerFunctions} />
  );
};
export default ContactFormContainer;

ContactFormContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

ContactFormContainer.defaultProps = {
  sample: "this is a sample string",
};
