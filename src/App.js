import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navigation />
            </div >
        );
    }
}

export default App;