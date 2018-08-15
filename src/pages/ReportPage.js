import React from 'react';
import {
    Card
} from 'reactstrap';

import ReportTable from '../components/ReportTable';

export default props => (
    <div className="container">
        <div className="row my-3">
            <Card>  
                <ReportTable></ReportTable>
            </Card>
        </div>
    </div> 
);