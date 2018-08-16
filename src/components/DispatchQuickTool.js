import React from 'react';
import {
    Button
} from 'reactstrap';

//Proprietary Components and Page Links
import { DispatchChart } from '../utils/importUtils';

export default class DispatchQuickTool extends React.Component{
    render() {
       return <div>
                <div>
                <DispatchChart></DispatchChart>
                </div>
                Requests
                <div>
                    <Button className="mb-3" color="info">Available Assets</Button>
                </div>
              </div>
       }
 }