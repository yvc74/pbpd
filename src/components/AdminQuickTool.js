import React from 'react';
import {
    Button
} from 'reactstrap';

import NewUserModal from './NewUserModal';
import NewTrailerModal from './NewTrailerModal';
import NewLocationModal from './NewLocationModal';

export default class AdminQuickTool extends React.Component{
    render() {
       return <div>
                Create
                <NewUserModal></NewUserModal>
                <NewTrailerModal></NewTrailerModal>
                <NewLocationModal></NewLocationModal>
                Reports
                <Button className="mb-2" color="info">Canned Report 1</Button>
                <Button className="mb-2" color="info">Canned Report 2</Button>
                <Button color="info">Canned Report 3</Button>
              </div>
       }
 }