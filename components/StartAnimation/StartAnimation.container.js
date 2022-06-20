import StartAnimationComponent from "./StartAnimation.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const StartAnimationContainer = (props) => {
  const { t } = useTranslation();

  const [playedAnimation, setPlayedAnimations] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.sessionStorage?.getItem("playedAnimation")) {
        setPlayedAnimations(true);
      } else {

        setTimeout(() => {
          window?.sessionStorage?.setItem("playedAnimation", "true");
        }, 10000);
      }
    }
  }, []);
  const containerFunctions = { t };

  const containerProps = {};
  return null;
  // return playedAnimation !== false ? null : (
  //   <StartAnimationComponent
  //     {...props}
  //     {...containerProps}
  //     {...containerFunctions}
  //   />
  // );
};
export default StartAnimationContainer;

StartAnimationContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

StartAnimationContainer.defaultProps = {
  sample: "this is a sample string",
};
