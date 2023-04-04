export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#83d18d",
    100: "#7ece89",
    200: "#77cb83",
    300: "#70c77d",
    400: "#68c377",
    500: "#60bf70",
    600: "#5bb76c",
    700: "#56af68",
    800: "#51a763",
    900: "#4da05e",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      primary: {
        dark: colorTokens.primary[700],
        main: colorTokens.primary[500],
        light: colorTokens.primary[50],
      },
      neutral: {
        dark: colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[200],
        light: colorTokens.grey[50],
      },
      background: {
        default: colorTokens.grey[10],
        alt: colorTokens.grey[0],
        primary:
          "radial-gradient(68.13% 100% at 100% 0, #dd5ce5 0, rgba(221, 92, 229, 0) 100%), linear-gradient(95.52deg, #2e95d3, rgba(46, 149, 211, 0)),linear-gradient(0deg, #5436da, #5436da), #6e6e80",
      },
    },
    typography: {
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};
