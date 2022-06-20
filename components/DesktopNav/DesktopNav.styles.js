import { keyframes } from '@mui/system';
  
  const spin = keyframes`
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  `;


const styles = {
  wrapper: {
    p: 6,
    backgroundColor: "transparent",
    width: "calc(100vh + 1px)",
    transform:
      "rotate(-90deg) translateX(calc(-100vh + 33px)) translateY(34px)",
    transformOrigin: "0% 50%",
    translateY: "-100vh",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid earth.main",
    zIndex: 30986730967456,
  },
  button: {
    animation: `${spin} 2s`,
    color: "highlight.main",
    px:6,
    fontSize: 20,

  },
};

export default styles