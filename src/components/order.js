import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import {Counter} from "./counter.js";
import {useDispatch, useSelector} from 'react-redux';
import { increaseQuantity } from '../Redux/Actions/ProductAction';
import { decreaseQuantity } from '../Redux/Actions/ProductAction';

export const Order = () => {
    let bascket = useSelector(state => state.ProductReducer.card)

    const dispatch = useDispatch()

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => dispatch(increaseQuantity(record))}>+</a>
                    <span>{text}</span>
                    <a onClick={() => dispatch(decreaseQuantity(record))}>-</a>
                </Space>
            )
        },
        {
            title: 'total',
            dataIndex: 'total',
            key: 'total'
        }
    ]

    return (
        <div>
            <h1>Order</h1>
            <Table columns={columns} dataSource={bascket} rowKey = {record => record.id} />
        </div>
    )
}