import React from 'react';
import {
    Button
} from 'reactstrap';

//Proprietary Components and Page Links
import { AdminChart, DispatchQuickTool, NewUserModal, NewDriverModal, NewTrailerModal, NewLocationModal, NewStoreModal } from '../utils/importUtils';

import './assets/Chart.css';

export default class AdminQuickTool extends React.Component{
    render() {
       return <div>
                <div>
                <AdminChart></AdminChart>
                </div>
                Create
                <div>
                    <NewUserModal></NewUserModal>
                    <NewDriverModal></NewDriverModal>
                    <NewTrailerModal></NewTrailerModal>
                    <NewLocationModal></NewLocationModal>
                    <NewStoreModal></NewStoreModal>                    
                </div>
                Reports
                <div>
                    <Button className="mb-2" color="info">Canned Report 1</Button>
                    <Button className="mb-2" color="info">Canned Report 2</Button>
                    <Button className="mb-2"color="info">Canned Report 3</Button>
                </div>
                <h5>Dispatch</h5>
                <DispatchQuickTool></DispatchQuickTool>
            </div>
       }
 }