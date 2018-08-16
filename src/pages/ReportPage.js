import React from 'react';
import {
    Card, CardBody, CardTitle, CardText, Row, Container, Col
} from 'reactstrap';

//Proprietary Components and Page Links
import { AdminRequestReportModal, AdminTrailerReportModal, ReportTable } from '../utils/importUtils';

export default props => (
    <Container>
        <Row className="row my-3">        
            <Card>
                <CardBody>
                    <CardTitle>Report Requests</CardTitle>
                    <CardText>
                        <Row>
                            <Col>
                                <AdminRequestReportModal></AdminRequestReportModal>
                            </Col>
                            <Col>
                                <AdminTrailerReportModal></AdminTrailerReportModal>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
        </Row>
        <Row>
            <Card>  
                <ReportTable></ReportTable>
            </Card>
        </Row>
    </Container>
);