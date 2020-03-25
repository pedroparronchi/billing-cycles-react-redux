import React, { Component } from 'react';

import Content from '../common/templates/content';
import ContentHeader from '../common/templates/contentHeader';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0"></ContentHeader>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard;