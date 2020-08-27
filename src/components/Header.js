import React from 'react'

export default function Header() {
    return (
        <div>

<nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">خانه</a>
    </li>
  </ul>
  {/* SEARCH FORM */}
  <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar" type="search" placeholder="جستجو" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  </form>
  {/* Right navbar links */}
</nav>

        </div>
    )
}
