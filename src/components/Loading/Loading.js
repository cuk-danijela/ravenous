import React, { Component } from 'react';
import './Loading.css';
import loadingImg from './loading.gif';

class Loading extends Component {
    render(){
        return (
            <div className='loadingContainer'>
                <img src={loadingImg} className='loadingImg' alt='Loading' />
            </div>
        );
    }
}

export default Loading;

