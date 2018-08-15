import React from 'react';
import {
    Button
} from 'reactstrap';

export default class DispatchQuickTool extends React.Component{
    render() {
       return <div>
                Requests
                <Button className="mb-2" color="info">Reconcile Requests</Button>
                <Button className="mb-2" color="info">View New Requests</Button>
                <Button className="mb-3" color="info">View Active Requests</Button>
                <Button color="info">View Available Assets</Button>
                Create
                <Button className="mb-2" color="info">Add New Driver</Button>
                
              </div>
       }
 }