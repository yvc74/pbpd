import React from 'react';
import {
    Button, Card, CardBody, CardTitle, CardText
} from 'reactstrap';

export default props => (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Card>
                    <CardBody>
                        <CardTitle>Admin Settings</CardTitle>
                        <CardText>
                            <form>
                            Hello again
                                <Button>Submit</Button>
                            </form>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div> 
);