import React from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Typography  } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { increaseQuantity } from '../../Redux/Actions/cardAction';
import { decreaseQuantity } from '../../Redux/Actions/cardAction';
import { deleteProduct } from '../../Redux/Actions/cardAction';

export const Order = () => {
    let bascket = useSelector(state => state.CardReducer.card);

    const dispatch = useDispatch();

    const { Text } = Typography;

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
        },
        {
            title: 'delete',
            dataIndex: 'delete',
            key: 'delete',
            render: (text, record) => (
                <a onClick={() => dispatch(deleteProduct(record))}>DELETE</a>
            )
        }
    ]

    return (
        <div>
            <h1>Order</h1>
            <Table
                columns={columns}
                dataSource={bascket}
                rowKey = {record => record.id}
                summary={pageData => {
                    let totalAmount = 0;

                    pageData.forEach(({ total }) => {
                        totalAmount += total;
                    });

                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell><b>Total amount</b></Table.Summary.Cell>
                                <Table.Summary.Cell colSpan={4}>
                                    <Text type="danger"><b>{totalAmount}</b></Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}
            />
        </div>
    )
}