import texture from '../Hero/img/t5.png'
import { black } from "../../theme/colors";

const styles = {
  wrapper: {
    // backgroundColor: 'lightblue'
    mt: 24,
    pb:24,
    ml:{xs:0, md: 15, mdl: 0}
  },
  title: {
    mb: 8,
    color: "tomato.main",
  },
  textArea: {
    width: { xs: 1, md: "60%" },
    // backgroundColor: "photo.main",
    p: { xs: 8, md: 16 },
    position: "relative",
    pr: 20,
    // float:'left'
    backgroundImage: `url(${texture.src})`,
    backgroundColor: black[400]
  },
  imageWrap: {
    mt: { xs: 12, md: 0 },
    width: { xs: 1, md: "380px" },
    position: { xs: "relative", md: "absolute" },
    right: { xs: 0, md: "-340px" },
    top: { xs: 0, md: "50%" },
    transform: { md: "translateY(-50%)" },
    boxShadow: 10,
  },
  p: {
    mb: 4,
  },
  pBold:{
    color: 'photo.main',
    mb: 4,
    fontWeight: 1000,
    // fontSize: 18
  }
};

export default styles;
