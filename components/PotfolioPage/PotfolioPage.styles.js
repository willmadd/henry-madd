import { black } from "../../theme/colors";
import texture from '../Hero/img/t5.png'

const styles = {
  wrapper: {
    pt: 4,
    minHeight: "calc(100vh - 67px)",
    // ml:{xs:0, md: 15, mdl: 0},
    pt: 20,
  },
  title: {
    mb: 8,
  },
  body:{
    mt:8,
    backgroundImage: `url(${texture.src})`,
    backgroundColor: black[400],
    color:'photo.main',
    p:8
  },
  backBtn:{
    position:'absolute',
    top:24,
    left: 24,

  }
};

export default styles;