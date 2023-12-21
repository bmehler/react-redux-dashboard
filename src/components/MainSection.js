import React, { useState } from 'react';
import Sidebar from './Navigation/Sidebar';
import Doughnut from './Dashboard/Doughnut';
import Bar from './Dashboard/Bar';
import Table from './Dashboard/Table';
import Satisfaction from './Dashboard/Satisfaction';
import Target from './Dashboard/Target';
import Bestseller from './Dashboard/Bestseller';
import Consultants from './Dashboard/Consultants';

const MainSection = () => {

    const [consultant, setConsultant] = useState(1)

    const handleRead = (id) => {
        setConsultant(id)
        //console.log('main-data', id)
    }

    return (
        <div className="row">
            <div className="screen-left">
                <Sidebar handleRead={handleRead} />
            </div>
            <div className="screen-right">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 topic-box">
                            <Bestseller consultant={consultant} />
                        </div>
                        <div className="col-lg-3 topic-box">
                            <Target consultant={consultant} />
                        </div>
                        <div className="col-lg-3 topic-box">
                            <Satisfaction consultant={consultant} />
                        </div>
                        <div className="col-lg-3 topic-box">
                            <Consultants />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-12 col-xl-6 mt-5">
                            <Doughnut consultant={consultant} />
                        </div>
                        <div className="col-sm-12 col-lg-12 col-xl-6 mt-5">
                            <Bar consultant={consultant} />
                        </div>
                    </div>
                    <Table consultant={consultant} />
                </div>
            </div>
        </div>
    )
}

export default MainSection