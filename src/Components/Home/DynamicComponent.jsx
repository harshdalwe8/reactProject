import React, { useState } from 'react';

const DynamicComponent = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('about');

    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
    };

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li onClick={() => handleNavItemClick('home')}>Home</li>
                        <li onClick={() => handleNavItemClick('about')}>About</li>
                        <li onClick={() => handleNavItemClick('contact')}>Contact</li>
                    </ul>
                </nav>
            </header>

            <main>
                {selectedNavItem === 'home' && <h1>Welcome to the Home Page</h1>}
                {selectedNavItem === 'about' && <h1>About Us</h1>}
                {selectedNavItem === 'contact' && <h1>Contact Us</h1>}
                {/* Add more dynamic content based on selectedNavItem */}
            </main>
        </div>
    );
};

export default DynamicComponent;