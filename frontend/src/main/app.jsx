import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from '../common/templates/header';
import Sidebar from '../common/templates/sidebar';
import Footer from '../common/templates/footer';
import Routes from './routes';

import '../common/templates/dependencies';

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </HashRouter>
)