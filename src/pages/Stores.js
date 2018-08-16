import React from 'react';
import {
    Card, CardBody, CardTitle, CardText, Container, Col, Row
} from 'reactstrap';

//Proprietary Components and Page Links
import { StoreQuickTool, RecordTable} from '../utils/importUtils';

export default props => (
    <Container>
        <Row>
            <Col className="col-9">
                <Card>
                    <CardBody>
                        <CardTitle>Store Requests</CardTitle>
                        <CardText>  
                            <h5>Add for loop to add records</h5>
                            <RecordTable></RecordTable>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col className="col-3">
                <Card>
                    <CardBody>
                        <CardTitle>Quick Tools</CardTitle>
                        <CardText>
                            <StoreQuickTool></StoreQuickTool>
                        </CardText>
                    </CardBody>    
                </Card>
            </Col>
        </Row>
    </Container> 
);