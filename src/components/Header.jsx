import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as RightArrow } from '../assets/images/right-arrow.svg';
import wegweiserLogo from '../assets/images/Wegweiser_logo.png';
import { AppContext } from '../AppContext';

const Header = () => {
    const location = useLocation(); // get currently active path
    const encodedTopicName = location.pathname.split("/")[2]; // extract topic name from encoded pathname
    const topicName = decodeURIComponent(encodedTopicName); // decode to prevent errors when using 'üöä'

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [navOpen, setNavOpen] = useState(false);

    const { selectedModule } = useContext(AppContext)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNavbar = () => {
        setNavOpen(!navOpen);
    };

    if (isMobile) {
        return (
            <div>
                <div
                    id="burger"
                    className={`fixed z-50 ml-1 cursor-pointer ${navOpen ? 'change' : ''}`}
                    onClick={toggleNavbar}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <nav
                    id="nav"
                    className={`fixed top-0 left-0 w-48 h-1/2 bg-gray-900 flex flex-col justify-center items-end p-5 z-40 transition-transform transform ${
                        navOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div id="inner-nav" className="flex flex-col justify-start space-y-5 w-full h-full pt-10">
                        <Link to="/" className="text-right text-gray-400 font-semibold hover:text-gray-200 focus:outline-none" onClick={toggleNavbar}>
                            Kursübersicht
                        </Link>
                        <Link to="/" className="text-right text-gray-400 font-semibold hover:text-gray-200 focus:outline-none" onClick={toggleNavbar}>
                            Der EU AI Act
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }

    return (
        <div className='Header flex pt-3 pl-1 items-center'>
            <div className='img-container w-16 ml-2 mr-2'>
                <Link to="/">
                    <img src={wegweiserLogo} alt="Wegweiser.UX-für-KI Logo" />
                </Link>
            </div>
            <Link to="/" className='h3 hover:underline mr-3'>Kursübersicht</Link>
            <RightArrow className='h-3 w-5 mr-3' style={{ fill: '#21202b' }} />
            <Link to="/" className='h3 hover:underline'>{selectedModule}</Link>
            {topicName !== "undefined" && (
                <div className='flex items-center ml-3'>
                    <RightArrow className='h-3 w-5 mr-3' style={{ fill: '#21202b' }} />
                    <Link to={location.pathname} className='h3 hover:underline'>{topicName}</Link>
                </div>
            )}
        </div>
    );
};

export default Header;
