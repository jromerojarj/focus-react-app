// Dependencies
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as callsActions from "../../actions/callsActions";

// Components
import { TemplateUI } from "../../components/";

// Material UI
import { Container, Typography } from "@material-ui/core";

class Calls extends Component {
  render() {
    return (
      <TemplateUI title="Calls" back={false}>
        <Container>
          <Typography variant="h4">Calls List</Typography>
        </Container>
      </TemplateUI>
    );
  }
}

const mapStateToProps = (reducers) => ({
  callsData: reducers.calls.data,
});

export default withRouter(connect(mapStateToProps, callsActions)(Calls));
