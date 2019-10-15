import React from 'react';
import assets from '@/assets';
// import $ from 'jquery';

import './index.css';

export default class Biological extends React.Component {

    // componentDidMount = () => {
    //     console.log(typeof $);
    // }

    helloWorld = () => {
        console.log('hello world');
    }

    toHuman = () => {
        this.props.history.push('/human');
    }

    toDog = () => {
        this.props.history.push('/dog');
    }

    toCat = () => {
        this.props.history.push('/cat');
    }

    render() {
        return (
            <div className="biological__wrapper">
                <div>This is Biological.</div>
                <img src={assets.earth} onClick={this.helloWorld}/>
                <div className="biological__children">
                    <button onClick={this.toHuman}>Human</button>
                    <button onClick={this.toDog}>Dog</button>
                    <button onClick={this.toCat}>Cat</button>
                </div>
            </div>
        )
    }
}