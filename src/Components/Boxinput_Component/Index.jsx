import React, { Component } from 'react';
import './style.css';
class Index extends Component {
    render() {
        return (
            <div className="form">
            <input type="text" id="month-input" className="form-control" placeholder="add details" />
            <button className="btn">Add</button>
        </div>
        );
    }
}

export default Index;