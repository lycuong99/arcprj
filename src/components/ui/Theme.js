import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: 'none',
      fontSize: "1rem",
    },
    estimate: {
      color: "white",
      fontSize: "1rem",
      fontFamily: "Pacifico",
      textTransform: "none",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: arcBlue,
    },
    subtitle1: {
      // fontFamily: "Raleway",
      fontWeight: 300,
      fontSize: "1.25rem",
      color: arcGrey
    },
    subtitle2: {
      // fontFamily: "Raleway",
      fontWeight: 300,
      fontSize: "1.25rem",
      color: "white"
    },
    body1: {
      // fontFamily: "Raleway",
      fontWeight: 300,
      fontSize: "1.25rem",
      color: arcGrey
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderRadius: 50,
      borderWidth: 2,
      textTransform: "none",
      fontFamily: "Roboto",
      fontWeight: "bold",
    }
  },
});