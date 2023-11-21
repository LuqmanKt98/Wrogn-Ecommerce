import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="row" style={{ border: "1px solid black", height: "80vh" }}>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ height: "100%" }}>
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Sidebar</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/add-item" className="nav-link" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Add Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/delete-item" className="nav-link" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Delete Item
            </Link>
          </li>
          {/* Add your other navigation items here */}
        </ul>
        <hr />
        <div className="dropdown">
          <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>Luqman</strong>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><Link className="dropdown-item" to="#">Settings</Link></li>
            <li><Link className="dropdown-item" to="#">Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="#">Sign out</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
