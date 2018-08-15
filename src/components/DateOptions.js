import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Row, Col, FormGroup, CustomInput } from 'reactstrap';

export default class DateOptions extends React.Component {
    constructor (props, context) {
        super(props, context)

        this.state = {
          startDate: '',
          endDate: '',
          startPlacedDate: '',
          endPlacedDate: '',
          startCheckedDate:'',
          endCheckedDate: '',
          idleDays: '',
          inspectionDays: '',
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
            <Row>
                <Col className="col-3">
                    <FormGroup> 
                        <legend>Updated</legend>
                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}
                            placeholderText="From Date"
                            className="mt-2"
                            />

                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            placeholderText="To Date"
                        />
                    </FormGroup>    
                </Col>  
                <Col className="col-3">
                    <FormGroup> 
                        <legend>Date Placed</legend>
                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}
                            placeholderText="From Date"
                            className="mt-2"
                            />

                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            placeholderText="To Date"
                        />
                    </FormGroup>    
                </Col>
                <Col className="col-3">
                <FormGroup> 
                        <legend>Date Checked</legend>
                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}
                            placeholderText="From Date"
                            className="mt-2"
                            />

                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            placeholderText="To Date"
                        />
                    </FormGroup>    
                </Col>
                <Col className="col-3">
                    <FormGroup>
                        <legend for="criticalDaysCheckbox">Critical Days</legend>
                        <div>
                            <CustomInput type="checkbox" id="idleDays" label="Idle More Than 30 Days" />
                            <CustomInput type="checkbox" id="inspection" label="Inspection Within 30 Days" />
                        </div>
                    </FormGroup>    
                </Col>                   
            </Row>
        );
    }
}