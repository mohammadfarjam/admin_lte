import React, {Component} from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className='content-wrapper p-2'>
                <div className='row'>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-info">
                            <div className="inner">
                                <h3>150</h3>
                                <p>سفارشات جدید</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-bag"/>
                            </div>
                            <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-success">
                            <div className="inner">
                                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                                <p>افزایش امتیاز</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-stats-bars"/>
                            </div>
                            <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-warning">
                            <div className="inner">
                                <h3>44</h3>
                                <p>کاربران ثبت شده</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-person-add"/>
                            </div>
                            <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-danger">
                            <div className="inner">
                                <h3>65</h3>
                                <p>بازدید جدید</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-pie-graph"/>
                            </div>
                            <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left"/></a>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default Dashboard;