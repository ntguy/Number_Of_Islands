import * as React from "react";
import { render } from "react-dom";
import { World } from "./World";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  RootBox: {
    fontFamily: "sans-serif",
    textAlign: "center",
    display: "flex",
    flexFlow: "row wrap",
    height: "500px"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.RootBox}>
      <World gridSize={5} />
    </Box>
  );
};

render(<App />, document.getElementById("root"));
