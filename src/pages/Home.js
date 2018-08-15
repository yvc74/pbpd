import React from 'react';
import {
    Card, CardBody, CardTitle, CardText, Container, Col, Row
} from 'reactstrap';

import AdminSubmit from '../components/AdminSubmit';
import AdminQuickTool from '../components/AdminQuickTool';
import History from '../components/History';

export default props => (
    <Container>
        <Row>
            <Col className="col-9">
                <Row>
                    <Card>
                        <CardBody>
                            <CardTitle>Admin Report Request</CardTitle>
                            <CardText>
                                <AdminSubmit></AdminSubmit>
                            </CardText>
                        </CardBody>
                    </Card>
                </Row>
                <Row className="my-3">
                    <Card>
                        <CardBody>
                            <CardTitle>Request History</CardTitle>
                            <CardText>  
                                <History></History>
                            </CardText>
                        </CardBody>
                    </Card>
                </Row>
            </Col>
            <Col className="col-3">
                <Card>
                    <CardBody>
                        <CardTitle>Quick Tools</CardTitle>
                        <CardText>
                            <AdminQuickTool></AdminQuickTool>
                        </CardText>
                    </CardBody>    
                </Card>
            </Col>
        </Row>
    </Container> 
);