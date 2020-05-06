// Dependencies
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// MaterialUI
import {
  AppBar,
  CssBaseline,
  Typography,
  Toolbar,
  Icon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const TemplateUI = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.pageContent}>
        <AppBar position="relative">
          <Toolbar>
            {props.back && (
              <Link to="/">
                <Icon
                  style={{
                    fontSize: 20,
                    color: blueGrey[50],
                    paddingRight: 40,
                  }}
                >
                  arrow_back
                </Icon>
              </Link>
            )}
            <Typography variant="h6" color="inherit" noWrap>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.heroContent}>{props.children}</div>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            IT Focus
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            App made by Jonathan Romero jromerojarj
          </Typography>
        </footer>
      </div>
    </Fragment>
  );
};

// Styles
const useStyles = makeStyles((theme) => ({
  pageContent: {
    minHeight: "100vh",
    display: "grid",
    gridTemplate: "auto 1fr auto / 1fr",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  footer: {
    backgroundColor: blueGrey.A100,
    padding: theme.spacing(6),
  },
}));

export default TemplateUI;
