import React, { useState } from 'react';
import { NavLink  } from "react-router-dom";
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import "./CSS/navmenu.css";

export const NavMenu = () => {

    const [page, pageChange] = useState();

    const onClick = (e) => {
        pageChange(e.key)
    }

    return (
      <div style={{ minWidth: 256 }}>
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
    )
}