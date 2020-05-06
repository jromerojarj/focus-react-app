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
  state = {
    loading: true,
    callsData: [],
    error: false,
  };

  componentDidMount = async () => {
    await this.getCalls();
  };

  getCalls = async () => {
    const vmBoxID = "b37675a2d7b90d60f0ee5d4175502394";
    const response = await this.props.getCallsList(vmBoxID);
    if (response.status === "success") {
      this.setState({
        callsData: this.props.callsData.data,
        error: false,
        loading: false,
      });
    } else if (response.status === "error") {
      this.setState({ callsData: [], error: true, loading: false });
    }
  };
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
