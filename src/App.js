import React from 'react';
import Navigation from './Navigation';
import Masterhead from './Masterhead';
import Portfoliosection from './Portfoliosection';
import About from './About';
import Contact from './Contact';
import Location from './location';
import './style.css';
const App = () => (
    <div>
        <Navigation/>
        <Masterhead/>
        <Portfoliosection/>
        <About/>
        <Contact/>
        <Location/>
    </div>
)

export default App;