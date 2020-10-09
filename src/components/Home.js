import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default Home;
