const styles = {
  wrapper: (menuOpen) => ({
    position: { xs: "fixed" },
    width: 1,
    zIndex: 1000,
    height: menuOpen ? 1 : 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: 3,
    display:{md: 'none'}
  }),
  title: (menuOpen) => ({
    color: menuOpen ? "photo.main" : "primary.main",
    
  }),
  header:(menuOpen)=> ({
    p: 3,
    display: "flex",
    justifyContent: "space-between",
  }),
  menuArea: (menuOpen) => ({
    boxShadow:3,
    backgroundColor: menuOpen ? "primary.main" : "photo.main",
  }),
  burger: (menuOpen) => ({
    color: menuOpen ? "photo.main" : "primary.main",
  }),
  button: {
    color: "photo.main",
  },
  menu: {
    pb: 8,
  },
};

export default styles;