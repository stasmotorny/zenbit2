import React, { useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {ProductCard} from "./components/card.js";
import {About} from "./components/about.js";
import {Order} from "./components/order.js";
import {Contacts} from "./components/contacts.js";
import {Switch, Route} from "react-router-dom";
import {NavMenu} from "./components/navmenu.js";

const { Header, Footer, Sider, Content } = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Header>
                    <NavMenu/>
                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>
                        <Switch>
                            <Route path="/products">
                                <ProductCard/>
                            </Route>
                            <Route path="/order">
                                <Order/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/contacts">
                                <Contacts/>
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}

export default App;
