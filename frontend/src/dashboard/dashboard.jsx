import React, { Component } from 'react';

import ContentHeader from '../common/templates/contentHeader';
import Content from '../common/templates/content';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'></ContentHeader>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}


export default Dashboard