// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import * as vmboxesActions from "../../actions/vmboxesActions";

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
import { blue } from "@material-ui/core/colors";

class VMBoxes extends Component {
  state = {
    loading: true,
    vmboxesData: [],
    error: false,
  };

  componentDidMount = async () => {
    await this.getVMBoxes();
  };

  getVMBoxes = async () => {
    const response = await this.props.getVMBoxesList();
    if (response.status === "success") {
      this.setState({
        vmboxesData: this.props.vmboxesData.data,
        error: false,
        loading: false,
      });
    } else if (response.status === "error") {
      this.setState({ callsData: [], error: true, loading: false });
    }
  };
  render() {
    return (
      <TemplateUI title="VM Boxes">
        <Container>
          <Typography variant="h4">VM Boxes List</Typography>
          <div style={{ padding: 50 }}>
            {this.state.loading ? (
              <Loader />
            ) : (
              <Box>
                {this.state.error ? (
                  <MessageError text="Error to get vmboxes list" />
                ) : this.state.vmboxesData.length <= 0 ? (
                  <Box>
                    <MessageEmpty text="Don't have vmboxes to show" />
                  </Box>
                ) : (
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">
                            <Box fontWeight="fontWeightBold">Mail box</Box>
                          </TableCell>
                          <TableCell align="center" fontWeight="fontWeightBold">
                            <Box fontWeight="fontWeightBold">Name</Box>
                          </TableCell>
                          <TableCell align="center" fontWeight="fontWeightBold">
                            <Box fontWeight="fontWeightBold">Messages</Box>
                          </TableCell>
                          <TableCell align="center" fontWeight="fontWeightBold">
                            <Box fontWeight="fontWeightBold">Actions</Box>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.vmboxesData.map((vmbox) => (
                          <TableRow key={vmbox.id}>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              <div
                                style={{
                                  color: blue[500],
                                }}
                              >
                                {vmbox.mailbox}
                              </div>
                            </TableCell>
                            <TableCell align="center">{vmbox.name}</TableCell>
                            <TableCell align="center">
                              {vmbox.messages}
                            </TableCell>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              <Link to={`/calls/${vmbox.id}`}>Go to VMBox</Link>
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
  vmboxesData: reducers.vmboxes.data,
});

export default connect(mapStateToProps, vmboxesActions)(VMBoxes);
