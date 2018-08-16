import React from 'react';
import {
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

//Proprietary Components and Page Links
import { StoreChart } from '../utils/importUtils';

export default class StoreQuickTool extends React.Component{
    render() {
       return <div>
                <StoreChart></StoreChart>
                <div>
                    <Button tag={Link} to="/request" className="mt-4" color="info">New Request</Button>
                </div>
              </div>
       }
 }