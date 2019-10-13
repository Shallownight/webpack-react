import React from 'react';
import assets from '../../assets';

import './index.css';

export default class Human extends React.Component {
    render() {
        return (
            <div className="human__wrapper">
                <div>This is Human.</div>
                <img src={assets.human} />
            </div>
        )
    }
}