import React from 'react';
import './style.css';

function Nav({ currentPage, setCurrentPage }) {
    return (
        <nav>
            <a className={currentPage == 'About' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('About');
            }}>About Me</a>
            <a className={currentPage == 'Project' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('Project');
            }}>Projects</a>
        </nav>
    );
}

export default Nav;