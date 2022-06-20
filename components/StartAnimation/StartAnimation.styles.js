import { keyframes } from '@mui/system';
  
  const grow = keyframes`
    0% {
      transform: scale(0%);
    }
    50% {
      transform: scale(100%);
    }
    75%{
      transform: translateX(-262px) translateY(-125px)
    }
    100%{
      transform: translateX(-262px) translateY(-125px)
    }
  `;

const fade = keyframes`
0% {
  opacity: 1;
  transform: translateX(0)
}
75%{
  opacity: 1;
}
99%{
   opacity: 0;
   transform: translateX(0)
}
100%{
  transform: translateX(-9999999px)
}
`;

const styles = {
  wrapper: {
    backgroundColor: "black.main",
    // opacity: 0.4,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: `${fade} 4s ease-in`,
    transform: 'translateX(-9999999px)'
  },
  circle: {
    height: 460,
    width: 460,
    backgroundColor: "tomato.main",
    borderRadius: 9999,
    animation: `${grow} 3s`,
    transform: 'translateX(-262px) translateY(-125px)'
  },
};

export default styles