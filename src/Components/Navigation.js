import React, { Component } from 'react';
import Form from './Form';

class Navigation extends Component {

        handleAllClick = () => {
            window.location.href = './Form';
        };

        handleActiveClick = () => {
            window.location.href = './Form';
        };

    render() {
        return (
            <div className="navigation">
                <div className="navigation-all" onClick={this.handleAllClick}>
                    <div className="all">
                        All
                    </div>
                    <div className="line">
                    </div>
                </div>
                <div className="active" onClick={this.handleActiveClick}>
                    Active
                </div>
                <div className="completed">
                    Completed
                </div>
            </div>
        );
    }
}

export default (Navigation);
