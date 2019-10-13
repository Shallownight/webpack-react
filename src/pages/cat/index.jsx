import React from 'react';
import assets from '../../assets';

import './index.css';

export default class Cat extends React.Component {
    render() {
        return (
            <div className="cat__wrapper">
                <div>This is Cat.</div>
                <img src={assets.cat} />
            </div>
        )
    }
}