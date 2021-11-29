// header with page title and link to bring you to Home

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <header className="col-md-6">
            <h1><Link to="/">Cookbook!</Link></h1>
        </header>
    );
}

export default Header;