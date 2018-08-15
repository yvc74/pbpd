import React from 'react';
import {
    Container, Col, Row, Card, CardBody, CardTitle, CardText
} from 'reactstrap';

import DispatchSubmit from '../components/DispatchSubmit';
import DispatchQuickTool from '../components/DispatchQuickTool';
import History from '../components/History';

export default props => (
    <Container>
        <Row>
            <Col className="col-9">
                <Row>
                    <Card>
                        <CardBody>
                            <CardTitle>Dispatch Report Request</CardTitle>
                            <CardText>
                                <DispatchSubmit></DispatchSubmit>
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
                            <DispatchQuickTool></DispatchQuickTool>
                        </CardText>
                    </CardBody>    
                </Card>
            </Col>
        </Row>
    </Container>
);