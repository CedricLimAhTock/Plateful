import React from 'react';
import Button from './Button'

function Header() {
    return (
        <div style={{display: 'flex' }}>
            <h3>
                <span style={{ color: '#60B058' }}>PLATE</span>FUL
            </h3>
            <div style={{float: 'right' }}>
                <a style={{ textDecoration: 'none' }} href='#'>ABOUT US</a>
                <Button text="Log In" backgroundColor="#60B058" color="#FFFFFF" />
            </div>
        </div>
    );
}

export default Header;