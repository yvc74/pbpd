import React from "react";
import { makeData } from "../utils/tableUtils";
import { CSVLink, CSVDownload } from "react-csv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
  Col,
  Container,
  Row
} from "reactstrap";

// Import React Table
import ReactTable from "react-table";
import moment from "moment";
import "react-table/react-table.css";


export default class InventoryTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    const today = String(moment().format("MMM DD, YYYY"));
    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Container>
                <Row>
                  <Col xs="11">
                    <CardTitle> Trailer Inventory Report : {today} </CardTitle>
                  </Col>
                  <Col xs="1">
                    <Button className="mb-2 mt-0 px-3" title="Download CSV">
                      <CSVDownload data={data} target="_blank" /> <FontAwesomeIcon icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col lg-12>
                    <CardText>
                      <ReactTable
                        data={data}
                        // filterable
                        // defaultFilterMethod={(filter, row) =>
                        //   String(row[filter.id]) === filter.value}
                        columns={[
                          {
                            Header: "Date",
                            columns: [
                              {
                                Header: "Last Updated",
                                accessor: "updatedDate"
                              },
                              {
                                Header: "Placed On",
                                accessor: "placedDate"
                              },
                              {
                                Header: "Checked On",
                                accessor: "checkedDate"
                              },
                              {
                                Header: "# Idle Days",
                                accessor: "idleDays"
                              },
                              {
                                Header: "Days till Inspection",
                                accessor: "inspectionDays"
                              }
                            ]
                          },
                          {
                            Header: "Trailer",
                            columns: [
                              {
                                Header: "Length",
                                accessor: "length"
                              },
                              {
                                Header: "About",
                                accessor: "about"
                              },
                              {
                                Header: "Door",
                                accessor: "door"
                              },
                              {
                                Header: "Unit",
                                accessor: "unit"
                              }
                            ]
                          },
                          {
                            Header: "Stats",
                            columns: [
                              {
                                Header: "Status",
                                accessor: "status"
                              },
                              {
                                Header: "Lot",
                                accessor: "lot"
                              },
                              {
                                Header: "Content",
                                accessor: "content"
                              }
                            ]
                          },
                          {
                            Header: "Region",
                            columns: [
                              {
                                Header: "Region",
                                accessor: "location"
                              },
                              {
                                Header: "User",
                                accessor: "user"
                              },
                              {
                                Header: "Driver",
                                accessor: "driver"
                              }
                            ]
                          }
                        ]}
                        defaultPageSize={25}
                        style={{
                          height: "600px"
                        }}
                        className="-striped -highlight"
                      />
                    </CardText>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}