import React from 'react';
import img from '../image/user8-128x128.jpg'
import {BrowserRouter,Route} from 'react-router-dom'

export default function Menu() {
    return (
        <div>
          <BrowserRouter>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
              {/* Brand Logo */}
              <a href="index3.html" className="brand-link">
                <img src={img} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">پنل مدیریت</span>
              </a>
              {/* Sidebar */}
              <div className="sidebar" style={{direction: 'ltr'}}>
                <div style={{direction: 'rtl'}}>
                  {/* Sidebar user panel (optional) */}
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                      <img src={img} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                      <a href="#" className="d-block">محمد فرجام </a>
                    </div>
                  </div>
                  {/* Sidebar Menu */}
                  <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                      {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                      <li className="nav-item">
                        <a href="#" className="nav-link active">
                          <i className="nav-icon fa fa-dashboard" />
                          <p>
                            داشبورد
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/widgets.html" className="nav-link">
                          <i className="nav-icon fa fa-th" />
                          <p>
                            ویجت‌ها
                            <span className="right badge badge-danger">جدید</span>
                          </p>
                        </a>
                      </li>
                      <li className="nav-item has-treeview">
                        <a href="#" className="nav-link">
                          <i className="nav-icon fa fa-pie-chart" />
                          <p>
                            چارت‌ها
                            <i className="right fa fa-angle-left" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a href="pages/charts/chartjs.html" className="nav-link">
                              <i className="fa fa-circle-o nav-icon" />
                              <p>نمودار ChartJS</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="pages/charts/flot.html" className="nav-link">
                              <i className="fa fa-circle-o nav-icon" />
                              <p>نمودار Flot</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="pages/charts/inline.html" className="nav-link">
                              <i className="fa fa-circle-o nav-icon" />
                              <p>نمودار Inline</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  {/* /.sidebar-menu */}
                </div>
              </div>
              {/* /.sidebar */}
            </aside>
          </BrowserRouter>



        </div>
    )
}
