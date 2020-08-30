import React, {Component} from 'react';

class Users extends Component {
    render() {
        return (
            <div className='content-wrapper p-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">جدول ریسپانسیو</h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width: 150}}>
                                        <input type="text" name="table_search" className="form-control float-right" placeholder="جستجو" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*.card-header */}
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover">
                                    <tbody><tr>
                                        <th>شماره</th>
                                        <th>کاربر</th>
                                        <th>تاریخ</th>
                                        <th>وضعیت</th>
                                        <th>دلیل</th>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>محمد</td>
                                        <td>11-7-2014</td>
                                        <td><span className="badge badge-success">تایید شده</span></td>
                                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                                    </tr>
                                    <tr>
                                        <td>219</td>
                                        <td>حسام</td>
                                        <td>11-7-2014</td>
                                        <td><span className="badge bg-danger">در حال بررسی</span></td>
                                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                                    </tr>
                                    <tr>
                                        <td>657</td>
                                        <td>رضا</td>
                                        <td>11-7-2014</td>
                                        <td><span className="badge badge-primary">تایید شده</span></td>
                                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                                    </tr>
                                    <tr>
                                        <td>175</td>
                                        <td>پرهام</td>
                                        <td>11-7-2014</td>
                                        <td><span className="badge badge-danger">رد شده</span></td>
                                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                                    </tr>
                                    </tbody></table>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                </div>
              {/*row*/}
            </div>


    );
    }
}

export default Users;