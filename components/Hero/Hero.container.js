import HeroComponent from "./Hero.component";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";
import one from "./img/one-1.webp";
import two from "./img/two-1.webp";
import three from "./img/three-1.webp";
import four from "./img/four-1.webp";
import throttle from "lodash.throttle";

const HeroContainer = (props) => {
  const images = [one, two, three, four];

  const [heroImage, setHeroImage] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", progressHeroImage);
    document.addEventListener("mousewheel", progressHeroImage);
    return () => {document.removeEventListener("mousemove", progressHeroImage)
    document.addEventListener("mousewheel",progressHeroImage)};
  }, []);

  const progressHeroImage = useCallback(
    throttle(
      () => {
        const rndImage = Math.floor(Math.random() * images.length);
        setHeroImage(rndImage);
      },
      100,
      { leading: false }
    ),
    [setHeroImage]
  );

  const { t } = useTranslation();

  const containerFunctions = { t, progressHeroImage };

  const containerProps = { image: images[heroImage] };

  return (
    <HeroComponent {...props} {...containerProps} {...containerFunctions} />
  );
};
export default HeroContainer;

HeroContainer.propTypes = {
  /**
   * This is a sample proptype used to create docs - docs are https://storybook.js.org/docs/react/writing-docs/doc-blocks
   * for more info on prop types please visit https://reactjs.org/docs/typechecking-with-proptypes.html
   */
  sample: PropTypes.string,
};

HeroContainer.defaultProps = {
  sample: "this is a sample string",
};
