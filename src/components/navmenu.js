import React, { useState } from 'react';
import { NavLink, withRouter  } from "react-router-dom";
import { Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
// import "./CSS/navmenu.css"

export const NavMenu = () => {

    const [page, pageChange] = useState("products");

    const onClick = (e) => {
        pageChange(e.key)
    }



    return (
      <div style={{ minWidth: 256 }}>
            {/*<Button type="primary" onClick={onClick} style={{ marginBottom: 16 }}>*/}
                {/*{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}*/}
            {/*</Button>*/}
          <Menu
              onClick={onClick}
              selectedKeys={page}
              mode="horizontal"
              align="right"
              theme="dark">

              <Menu.Item key="products">
                  <NavLink to="/products" activeClassName="hurray">Products</NavLink>
              </Menu.Item>

                <Menu.Item key="about">
                    <NavLink to="/about" activeClassName="hurray">About</NavLink>
                </Menu.Item>

              <Menu.Item key="order">
                  <NavLink to="/order" activeClassName="hurray">Order</NavLink>
              </Menu.Item>

              <Menu.Item key="contacts">
                  <NavLink to="/contacts" activeClassName="hurray">Contacts</NavLink>
              </Menu.Item>

            </Menu>
        </div>
        // <nav>
        //     <ul>
        //         <li>
        //             <NavLink to="/products" activeClassName="hurray">Products</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/about" activeClassName="hurray">About</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/order" activeClassName="hurray">Order</NavLink>
        //         </li>
        //     </ul>
        // </nav>
    )
}