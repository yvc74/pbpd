import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Button, Row, Col, FormGroup, Input, Label, UncontrolledCollapse } from 'reactstrap';

import DateOptions from './DateOptions';
import TrailerOptions from './TrailerOptions';
import MoreOptions from './MoreOptions';

export default class AdminSubmit extends React.Component {
    constructor (props, context) {
        super(props, context)

        this.state = {
          startDate: moment('2018-02-01'),
          endDate: moment('2018-02-10'),
          placedDate: moment(),
          checkedDate: moment(),
          idleDays: '',
          inspectionDays: '',
          currentStatus: '',
          hasLogo: '',
          owned: '',
          liftGate: '',
          rollDoor: '',
          trailerLength: '',
          lotLocation: '',
          trailerUnitNum: '',
          contentType: '',
          region: '',
          user: '',
          driver: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

      }

      

      handleChange = ({ startDate, endDate }) => {
        startDate = startDate || this.state.startDate
        endDate = endDate || this.state.endDate
    
        if (startDate.isAfter(endDate)) {
          endDate = startDate
        }
    
        this.setState({ startDate, endDate })
      }
    
      handleChangeStart = (startDate) => this.handleChange({ startDate })
    
      handleChangeEnd = (endDate) => this.handleChange({ endDate })

    //   handleChange(event) {
    //       const target = event.target;
    //       const value = target.type ===
    //       this.setState({value: event.target.value});
    //       this.setState({placedDate : event.target.value});
    //   }

    //   handleSubmit(event) {
    //     alert('Your report selections are as follows: ' + this.state.startDate + this.state.endDate  
    //     + this.state.placedDate + this.state.checkedDate + this.state.idleDays + this.state.inspectionDays 
    //     + this.state.currentStatus + this.state.hasLogo + this.state.owned + this.state.liftGate + this.state.rollDoor
    //     + this.state.trailerLength + this.state.lotLocation + this.state.trailerUnitNum + this.state.contentType 
    //     + this.state.region + this.state.user + this.state.driver);
    //     event.preventDefault();
    //   }

      render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Row>
                    <Col className="col-3">
                        <div>
                            <Button id="dateToggler" color="success" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Date Options</Button> 
                        </div>
                    </Col>
                    <Col className="col-3">
                        <div>
                            <Button id="trailerToggler" color="success" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Trailer Options</Button>
                        </div>
                    </Col>
                    <Col className="col-3">
                        <div>
                            <Button id="otherToggler" color="success" onClick={this.toggle} style={{ marginBottom: '1rem' }}>More Options</Button>
                        </div>
                    </Col>
                    <Col className="col-3">
                        <div>
                            <Button color="info" style={{ marginBottom: '1rem' }} type="submit" value="Submit">Submit</Button>
                        </div>
                    </Col>
                </Row>
                <UncontrolledCollapse toggler="#dateToggler">
                    <DateOptions></DateOptions>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#trailerToggler">
                    <TrailerOptions></TrailerOptions>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#otherToggler">
                    <MoreOptions></MoreOptions>
                </UncontrolledCollapse>
            </form>
        );
    }
}