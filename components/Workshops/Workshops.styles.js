const styles = {
  wrapper: {
    // backgroundColor: 'lightblue'
    my: 24,
  },
  title: {
    mb: 8,
    color: "highlight.main",
  },
  textArea: {
    width: { xs: 1, md: "60%" },
    backgroundColor: "photo.main",
    p: { xs: 8, md: 16 },
    position: "relative",
    pr: 20,
    // float:'left'
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
};

export default styles;
