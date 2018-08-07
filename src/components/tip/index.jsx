import React from 'react';
import './index.css'
import TipIMG from '../../assets/helloworld.jpg'

export default class Hello extends React.Component {
  render() {
    return (
      <div className='tipContainer'>
        <div className='font'>hello world</div>
        <img src={TipIMG} alt='hello world'/>
      </div>
    )
  }
}