import React from 'react';
import { Row, Col, FormGroup, Input, CustomInput } from 'reactstrap';

export default class MoreOptions extends React.Component {
    constructor (props, context) {
        super(props, context)

        this.state = {          
          region: '',
          user: '',
          driver: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

      }

      render() {
        return (
            <Row>
                <Col className="col-3">
                    <FormGroup>
                        <legend for="regionCheckbox">Region</legend>
                        <div>
                            <CustomInput type="checkbox" id="winstonSalem" label="Winston-Salem" />
                            <CustomInput type="checkbox" id="asheville" label="Asheville" />
                        </div>
                    </FormGroup>      
                </Col>
                <Col className="col-3">
                    <FormGroup controlId="formControlsSelectMultiple">
                        <legend>User</legend>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option value="select">Mary</option>
                            <option value="select">Bob</option>
                            <option value="select">Timothy</option>
                            <option value="select">Reggie</option>
                            <option value="select">Monique</option>
                        </Input>
                    </FormGroup>    
                </Col>
                <Col className="col-3">
                    <FormGroup controlId="formControlsSelectMultiple">
                        <legend>Driver ID</legend>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option value="select">qshortridge</option>
                            <option value="select">thoffpauir</option>
                            <option value="select">phill</option>
                            <option value="select">klong</option>
                            <option value="select">eyarbrough</option>
                            <option value="select">dclark</option>
                            <option value="select">chill</option>
                            <option value="select">tstevens</option>
                            <option value="select">Aldrich</option>
                        </Input>
                    </FormGroup>    
                </Col>
                <Col className="col-3">
                    {/* Placeholder column */}
                </Col>
            </Row>
        );
    }
}