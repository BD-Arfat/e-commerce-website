import React from 'react';
import Category from '../../src/Sidebar/Category/Category'
import Price from '../../src/Sidebar/Price/Price'
import Colors from '../../src/Sidebar/Colors/Colors'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>

            <Category/>
            <Price/>
            <Colors/>

        </section>
    );
};

export default Sidebar;