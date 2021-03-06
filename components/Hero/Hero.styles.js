import { black } from "../../theme/colors";
import texture from "./img/t5.png";

const styles = {
  wrapper: {
    display: "flex",
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
  },
  centerPosition: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
  },
  image: {
    width: { xs: 1, md: 460 },
    height: { xs: "calc(100vw - 32px)", md: 460 },
    boxShadow: 10,
    my: 24,
    mx: 24,
    zIndex: 2,
    backgroundColor: "tomato.main",
    borderRadius: 9999,
  },
  info: {
    m: { xs: 0, md: 12 },
    mb: { xs: 12 },
    p: { xs: 8, md: 10 },
    pl: { xs: 8, md: 16 },
    ml: { xs: 0, md: -30 },
    backgroundImage: `url(${texture.src})`,
    backgroundColor: black[400],
  },
  activeImage: (isActive) => ({
    display: isActive ? "block" : "none",
  }),
  imageSpacer: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  tag: {
    fontWeight: 800,
    mt: 4,
    fontSize: 14,
    mb: 4,
    textAlign: "center",
    color: "gold",
  },
  socialIcon: {
    height: 48,
    width: 48,
  },
  socials: {
    display: "flex",
    alignItems: "center",
    mt: 4,
  },
  followMe: {
    mr: 2,
    color: "highlight.main",
  },
  title: {
    textAlign: "center",
  },
  p: {
    mb: 4,
  },
};
export default styles;
