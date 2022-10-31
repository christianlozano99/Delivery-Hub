import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Tracker from './components/pages/Tracker';


function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/'
                        element={<Home/>}/>
                    <Route path='/services'
                        element={<Services/>}/>
                    <Route path='/products'
                        element={<Products/>}/>
                    <Route path='/sign-up'
                        element={<SignUp/>}/>
                    <Route path='/tracker'
                        element={<Tracker/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
