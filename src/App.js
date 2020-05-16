import React, { useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {ProductCard} from "./components/card.js";

const { Header, Footer, Sider, Content } = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>
                        <ProductCard />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}

export default App;
