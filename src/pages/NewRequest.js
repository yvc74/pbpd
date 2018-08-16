import React from 'react';
import {
    Card, CardBody, CardText, CardTitle, Container, Row
} from 'reactstrap';

//Proprietary Components and Page Links
import { RequestSubmit } from '../utils/importUtils';

export default props => (
    <Container>
        <Row>
            <Card>
                <CardBody>
                    <CardTitle>New Trailer Request</CardTitle>
                    <CardText>
                        <RequestSubmit></RequestSubmit>
                    </CardText>
                </CardBody>
            </Card>
        </Row>
    </Container>
);