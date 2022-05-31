const styles = {
  wrapper: {
    // backgroundColor: 'lightblue'
  },
  sectionTitle: {
    color: "highlight.main",
    mt: 24,
    mb: 8,
  },
  title: {
    // color:'photo.main'
  },
  imageWrapper: {
    // backgroundColor:'red',
    maxHeight: 282,
    position: "relative",
    height: { xs: "calc(100vw - 16px)", md: 'calc(25vw - 20px)', lg: "calc((100vw - 86px) / 6)" },
    width:{ sm: '50%'}
  },
  titleArea: {
    width:{ sm: '50%'},
    position: "relative",
    backgroundColor: "photo.main",
    p: 3,
    // mx:4,
    // mt: -4,
    zIndex: 4,
  },
  portfolioItem: {
    display:{sm: 'flex'}
  },
};

export default styles;
