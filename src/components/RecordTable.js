import React from "react";
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardText, Col, Row } from "reactstrap";

// Import React Table
import ReactTable from "react-table";
import moment from "moment";
import "react-table/react-table.css";

//Proprietary Components and Page Links
import { makeData } from "../utils/tableUtils";


export default class ReportTable extends React.Component {
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
                  <Col lg-12>
                    <CardText>
                      <ReactTable
                        data={data}
                        filterable
                        defaultFilterMethod={(filter, row) =>
                          String(row[filter.id]) === filter.value}
                        columns={[
                          {
                            Header: "Date",
                            accessor: "updatedDate",
                          },
                          {
                            Header: "Content",
                            accessor: "content",
                          },
                          {
                            Header: "Status",
                            accessor: "requeststatus"
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

    );
  }
}
