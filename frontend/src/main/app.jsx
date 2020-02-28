import React from 'react';

import Header from '../common/templates/header';
import Sidebar from '../common/templates/sidebar';
import Footer from '../common/templates/footer';
import Routes from './routes';

import '../common/templates/dependencies';

export default props => (
    <div className='wrapper'>
        <Header></Header>
        <Sidebar></Sidebar>
        <div className='content-wrapper'>
            <Routes></Routes>
        </div>
        <Footer></Footer>
    </div>
)