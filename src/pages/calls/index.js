// Dependencies
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

// Actions
import * as callsActions from "../../actions/callsActions";

// Functions
import { phoneParser } from "../../assets/functions/phoneParser";

// Components
import {
  TemplateUI,
  Loader,
  MessageEmpty,
  MessageError,
} from "../../components/";

// Material UI
import {
  Container,
  Box,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red, green, blue } from "@material-ui/core/colors";

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
          <div style={{ padding: 50 }}>
            {this.state.loading ? (
              <Loader />
            ) : (
              <Box>
                {this.state.error ? (
                  <MessageError text="Error to get calls list" />
                ) : this.state.callsData.length <= 0 ? (
                  <Box>
                    <MessageEmpty text="Don't have calls to show" />
                  </Box>
                ) : (
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">
                            <Box fontWeight="fontWeightBold">Status</Box>
                          </TableCell>
                          <TableCell align="center" fontWeight="fontWeightBold">
                            <Box fontWeight="fontWeightBold">From</Box>
                          </TableCell>
                          <TableCell align="center" fontWeight="fontWeightBold">
                            <Box fontWeight="fontWeightBold">To</Box>
                          </TableCell>
                          <TableCell align="center" fontWeight="fontWeightBold">
                            <Box fontWeight="fontWeightBold">Duration</Box>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.callsData.map((call) => (
                          <TableRow key={call.media_id}>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              <div
                                style={{
                                  color:
                                    call.folder === "new"
                                      ? blue[500]
                                      : call.folder === "saved"
                                      ? green.A700
                                      : red[500],
                                }}
                              >
                                {call.folder[0].toUpperCase() +
                                  call.folder.slice(1)}
                              </div>
                            </TableCell>
                            <TableCell align="center">
                              {`${phoneParser(call.from).phoneNumber} / ${
                                phoneParser(call.from).identifier
                              }`}
                            </TableCell>
                            <TableCell align="center">
                              {`${phoneParser(call.to).phoneNumber} / ${
                                phoneParser(call.to).identifier
                              }`}
                            </TableCell>
                            <TableCell align="center">
                              {`${parseInt(
                                moment
                                  .duration(call.length, "seconds")
                                  .asMinutes()
                              )} minutes : ${moment
                                .duration(call.length, "seconds")
                                .seconds()} seconds`}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Box>
            )}
          </div>
        </Container>
      </TemplateUI>
    );
  }
}

const classes = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeadCell: {
    fontWeight: "bold",
  },
});

const mapStateToProps = (reducers) => ({
  callsData: reducers.calls.data,
});

export default withRouter(connect(mapStateToProps, callsActions)(Calls));
