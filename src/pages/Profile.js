import React from 'react';
import {
    Button, Card, CardBody, CardTitle, CardText, Input
} from 'reactstrap';

export default props => (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Card>
                    <CardBody>
                        <CardTitle>Profile Settings</CardTitle>
                        <CardText>
                            <form className="p-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input label="Example label" icon="envelope" />
                                    </div>

                                    <div className="col-md-6">
                                        <Input label="Example label" icon="lock" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Input type="textarea" label="Basic textarea"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <select class="selectpicker">
                                            <optgroup label="Picnic">
                                                <option>Mustard</option>
                                                <option>Ketchup</option>
                                                <option>Relish</option>
                                            </optgroup>
                                            <optgroup label="Camping">
                                                <option>Tent</option>
                                                <option>Flashlight</option>
                                                <option>Toilet Paper</option>
                                            </optgroup>
                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <select class="selectpicker">
                                            <optgroup label="Picnic">
                                                <option>Mustard</option>
                                                <option>Ketchup</option>
                                                <option>Relish</option>
                                            </optgroup>
                                            <optgroup label="Camping">
                                                <option>Tent</option>
                                                <option>Flashlight</option>
                                                <option>Toilet Paper</option>
                                            </optgroup>
                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <select class="selectpicker">
                                            <optgroup label="Picnic">
                                                <option>Mustard</option>
                                                <option>Ketchup</option>
                                                <option>Relish</option>
                                            </optgroup>
                                            <optgroup label="Camping">
                                                <option>Tent</option>
                                                <option>Flashlight</option>
                                                <option>Toilet Paper</option>
                                            </optgroup>
                                        </select>
                                    </div>

                                </div>
                                <Button>Submit</Button>
                            </form>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div> 
);