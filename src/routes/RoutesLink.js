import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home.js';
import Faq from '../pages/Faq.js';
import Roadmap from '../pages/Roadmap.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';

function RoutesLink() {
    return <div className="App">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/roadmap">RoadMap</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/roadmap' element={< Roadmap />}></Route>
            <Route exact path='/faq' element={< Faq />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
    </div>
}

export default RoutesLink;