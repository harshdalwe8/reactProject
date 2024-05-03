import React, { useState, useEffect } from 'react';
import './Header.css';
import Home from '../Home/HomeComponent';
import About from '../About/AboutComponent';
import Contact from '../Contact/ContactComponent';

const HeaderComponents = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollValue, setScrollValue] = useState(false);

    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);

            setScrollValue(scrollTop);

            const header = document.querySelector('#netflixHeader');
            if (scrollTop > 0) {
               
                header.style.backgroundColor = '#000';
            }else {
                header.style.background= 'linear-gradient(to right, #e509141c, #d0182139)';
            }

            // console.log(scrollTop);
            // console.log(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`container ${scrollValue > 0 ? 'scrolled' : ''}`}>
            <header id='netflixHeader' className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <nav>
                    <ul className="nav-links">
                        <li onClick={() => handleNavItemClick('home')}>Home</li>
                        <li onClick={() => handleNavItemClick('about')}>About</li>
                        <li onClick={() => handleNavItemClick('contact')}>Contact</li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                {selectedNavItem === 'home' && <Home />}
                {selectedNavItem === 'about' && <About />}
                {selectedNavItem === 'contact' && <Contact />}
                {/* Add more dynamic content based on selectedNavItem */}
            </main>
        </div>
    );
};

export default HeaderComponents;
