import React, {Component} from 'react';
import img from '../image/user8-128x128.jpg';
import {Redirect, Route, Switch} from "react-router";
import Dashboard from "./Dashboard";
import {BrowserRouter, NavLink} from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import ShowPost from "./ShowPost";


class Menu extends Component {

    state = {
        activeMenu: false,

    }
    activeMenu = (value) => {
        this.setState({
            activeMenu: value
        })
    }
componentWillMount() {
    let address_page = window.location.pathname;
    if(address_page === "/dashboard"){
        this.activeMenu('dashboard')
    }
    if(address_page === "/users"){
        this.activeMenu('users')
    }
}

    render() {


        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path="/"><Redirect to="/dashboard"/></Route>
                    <Route exact path='/users' component={Users}/>
                    <Route exact path='/posts' component={Posts}/>
                    <Route exact path='/showpost/:id' component={ShowPost}/>
                </Switch>

                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src={img} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                             style={{opacity: '.8'}}/>
                        <span className="brand-text font-weight-light">پنل مدیریت</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar" style={{direction: 'ltr'}}>
                        <div style={{direction: 'rtl'}}>
                            {/* Sidebar user panel (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src={img} className="img-circle elevation-2" alt="User Image"/>
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">محمد فرجام </a>
                                </div>
                            </div>
                            {/* Sidebar Menu */}
                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                    data-accordion="false">
                                    {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                                    <li className="nav-item">
                                        <NavLink to="/dashboard" className={this.state.activeMenu === 'dashboard' ? 'nav-link active' : 'nav-link'}  onClick={this.activeMenu.bind(this, 'dashboard')}>
                                            <i className="nav-icon fa fa-dashboard"/>
                                            <p>
                                                داشبورد
                                            </p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/users"
                                                 className={this.state.activeMenu === 'users' ? 'nav-link active' : 'nav-link'}
                                                 onClick={this.activeMenu.bind(this, 'users')}>
                                            <i className="nav-icon fa fa-user"/>
                                            <p>
                                                کاربران
                                            </p>
                                        </NavLink>
                                    </li>
                                    <li className={this.state.activeMenu !== 'post' ? 'nav-item has-treeview' : "nav-item has-treeview menu-open"}>
                                        <NavLink to="#"
                                                 className={this.state.activeMenu === 'post' ? 'nav-link active' : 'nav-link'}
                                                 onClick={this.activeMenu.bind(this, 'post')}>
                                            <i className="nav-icon fa fa-pie-chart"/>
                                            <p>
                                                مطالب
                                                <i className="right fa fa-angle-left"/>
                                            </p>
                                        </NavLink>
                                        <ul className={this.state.activeMenu !== 'post' ? 'fade' : "nav nav-treeview"}>
                                            <li className="nav-item">
                                                <NavLink to="chart" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"/>
                                                    <p>مطلب جدید</p>
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/posts" className="nav-link">
                                                    <i className="fa fa-circle-o nav-icon"/>
                                                    <p>پست ها</p>
                                                </NavLink>
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
        );
    }
}

export default Menu;