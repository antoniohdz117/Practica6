import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Router from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Carousel from './components/Carousel';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />       {/* Página de inicio */}
                    <Route path="/about" element={<About />} /> {/* Página de about */}
                </Routes>
            </Layout>
        </Router>
    );
};


export default App;