import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/about" style={styles.link}>About</Link>
                <Link to="/info" style={styles.link}>Info</Link>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#f8f9fa',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        fontSize: '18px',
    },
};

export default Header;