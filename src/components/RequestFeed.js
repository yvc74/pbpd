import React from 'react';
import { CSVLink } from 'react-csv';
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
} from 'reactstrap';
import moment from 'moment';

//Proprietary Components and Page Links
import { RecordTable } from '../utils/importUtils';
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
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs="11">
                                <CardTitle> Active Requests : {today} </CardTitle>
                            </Col>
                            <Col xs="1" className="pl-2">
                                <Button className="mb-2 mt-0" title="Download CSV">
                                <CSVLink data={data} target="_blank" /> <FontAwesomeIcon icon="download" />
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg-12>
                                <CardText>  
                                    <h5>Add for loop to add records</h5>
                                        <RecordTable></RecordTable>
                                </CardText>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        );
    }
}
