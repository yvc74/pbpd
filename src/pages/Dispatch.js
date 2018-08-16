import React from 'react';
import {
    Container, Col, Row, Card, CardBody, CardTitle, CardText
} from 'reactstrap';

//Proprietary Links
import { DispatchQuickTool, RequestFeed } from '../utils/importUtils';

export default props => (
    <Container>
        <Row>
            <Col className="col-9">
                <RequestFeed></RequestFeed>
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