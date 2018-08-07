import React from 'react';
import Tip from './components/tip/index.jsx'
import './app.css'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Tip />
      </div>
    )
  }
}