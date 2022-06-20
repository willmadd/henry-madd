import MenuComponent from "./Menu.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";

const MenuContainer = (props) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItem = (ref) => {
    setMenuOpen(false);
    props.handleMenuClick(ref);
  };

  const containerFunctions = { t, handleMenuItem, setMenuOpen };
  const containerProps = { menuOpen };

  return (
    <MenuComponent {...props} {...containerProps} {...containerFunctions} />
  );
};
export default MenuContainer;

MenuContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

MenuContainer.defaultProps = {
  sample: "this is a sample string",
};
