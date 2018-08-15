import React from "react";
import { makeData } from "../utils/tableUtils";
// import { CSVLink, CSVDownload } from 'react-csv';
import { Button, Card } from 'reactstrap';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class ReportTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Card>
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
          {/* <Button><CSVLink>
              Download me
          </CSVLink></Button> */}
        </Card>    
      </div>
    );
  }
}

