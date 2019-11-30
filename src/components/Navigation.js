import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to='/' className="navbar-brand">Music Store</Link>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to='/products/all'>Products</Link>
                </li>
                <li className="nav-item dropdown">
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                        <Link className="nav-link" to='/products/all'>Products</Link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;
