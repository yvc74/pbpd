import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class PersonForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup row inline>
          <Label for="userName" sm={2}>Name</Label>
          <Col className="col-6" sm={10}>
            <Input type="text" name="firstName" id="firstName" placeholder="Jim" />
          </Col>
          <Col className="col-6" sm={10}>
            <Input type="text" name="lastName" id="lastName" placeholder="Wrangler" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail2" placeholder="default" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}