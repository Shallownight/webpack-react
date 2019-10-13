import React from 'react';
import assets from '../../assets';

import './index.css';

export default class Dog extends React.Component {
    render() {
        return (
            <div className="dog__wrapper">
                <div>This is Dog.</div>
                <img src={assets.dog} />
            </div>
        )
    }
}