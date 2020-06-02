import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {ProductCard} from "./components/pages/card.js";
import {About} from "./components/pages/about.js";
import {Order} from "./components/pages/order.js";
import {Contacts} from "./components/pages/contacts.js";
import {Switch, Route} from "react-router-dom";
import {NavMenu} from "./components/navmenu.js";
import {getProducts} from "./Redux/Actions/productAction";
import { useEffect } from 'react';
import {useDispatch} from "react-redux";

const { Header, Footer, Sider, Content } = Layout;

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <div className="App">
            <Layout style={{ minHeight: '100vh' }}>
                <Header>
                    <NavMenu/>
                </Header>
                <Layout>
                    <Sider breakpoint="md" collapsedWidth="0">Sider</Sider>
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
