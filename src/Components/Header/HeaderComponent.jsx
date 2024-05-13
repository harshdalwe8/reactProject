import React, { useState, useEffect } from 'react';
import './Header.css';
import Home from '../Home/HomeComponent';
import About from '../About/AboutComponent';
import Contact from '../Contact/ContactComponent';
import ListingPage from '../CarListing/ListingPage';

const HeaderComponents = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollValue, setScrollValue] = useState(false);

    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
    };

    const CarDetailList = [
        { id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rolls-royce.svg/1255px-Rolls-royce.svg.png', text: 'Item 1' },
        { id: 2, image: 'https://p7.hiclipart.com/preview/322/83/827/classic-car-ford-mustang-sports-car-classic-car-design.jpg', text: 'Item 2' },
        { id: 3, image: 'https://p1.hiclipart.com/preview/606/49/67/retro-cars-brown-classic-coupe-png-clipart.jpg', text: 'Item 3' },
        { id: 4, image: 'https://p1.hiclipart.com/preview/606/49/67/retro-cars-brown-classic-coupe-png-clipart.jpg', text: 'Item 4' },
        // Add more items as needed
      ];

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = document.documentElement.scrollTop;
            console.log(scrollTop);
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
                        <li onClick={() => handleNavItemClick('car')}>Car</li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                {selectedNavItem === 'home' && <Home />}
                {selectedNavItem === 'about' && <About />}
                {selectedNavItem === 'contact' && <Contact />}
                {selectedNavItem === 'car' && <ListingPage CarDetailList = {CarDetailList}/>}   
            
                {/* Add more dynamic content based on selectedNavItem */}
            </main>
        </div>
    );
};

export default HeaderComponents;
