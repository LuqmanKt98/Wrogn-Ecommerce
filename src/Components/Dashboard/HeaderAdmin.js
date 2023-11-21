import React from 'react';

const headerStyles = {
  container: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: '14px',
  },
  navbar: {
    backgroundColor: '#f0f0f0',
  },
  navbarBrand: {
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'indigo',
  },
  linkStyles: {
    textDecoration: 'none',
    color: 'black',
    transition: 'color 0.3s',
  },
  searchInput: {
    border: '1px solid indigo',
    borderRadius: '5px',
  },
  searchButton: {
    backgroundColor: 'indigo',
    border: 'none',
    color: 'white',
  },
};

function HeaderAdmin() {
  return (
    <div style={headerStyles.container} className="container-fluid shadow p-3 bg-body-dark rounded">
      <nav style={headerStyles.navbar} className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a style={headerStyles.navbarBrand} className="navbar-brand" href="#">
            WROGN DASHBOARD
          </a>
          <input type="checkbox" id="navbar-toggle" className="d-none" />
          <label htmlFor="navbar-toggle" className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </label>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={headerStyles.searchInput}
              />
              <button
                className="btn"
                type="submit"
                style={headerStyles.searchButton}
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" style={headerStyles.linkStyles}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person mb-1" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg> MY ACCOUNT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
}

export default HeaderAdmin;

            
