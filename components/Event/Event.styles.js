import { black } from "../../theme/colors";

const styles = {
  wrapper: {
    mb: 4,
    pl:{xs:0, md: 15, mdl: 0}
  },
  chip: { mr: 2, mt: 2, backgroundColor:'tomato.main', color: black[400] },
  eventHead: {
    display: "flex",
    alignItems: "center",
    // justifyContent: 'space-between'
  },
  crowdFunder:{
    backgroundColor:'rgba(227, 220, 210, 0.8)',
    p:6,
    mt:4
  },
  eventHeadDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: {
    ml: 1,
  },
  // action: { ml: 2 },
  buttonLbl: { fontSize: 12 },
  eventList: {
    px: 4,
    // backgroundColor: "rgba(227, 220, 210, 0.8)",
    pb:4,
  },
  performancesText: {
    mb: 4,

  },
  funding:{
    mt: 12
  },
  showsArea:{
    pt:4,
    backgroundColor: "rgba(227, 220, 210, 0.8)",
  },
  eventImage: { my: 4 },
  review: {
    display: "flex",
    alignItems: "center",
  },
  chipArea: { mb: 4, mt: 2 },
  reviewSection: {
    my: 4,
  },
  divider: { mt:2, height: "1px", backgroundColor: "background.main", width: 1 },
  caption: {
    fontStyle: "italic",
    fontSize: 14,
    mr: 2,
    color: "photo.main",
  },
  reviewBody: {
    color: "photo.main",
  },
  p: {
    mb: 4,
    color: "photo.main",
  },
  pFunding:{
    color: 'black.main'
  }
};

export default styles;
