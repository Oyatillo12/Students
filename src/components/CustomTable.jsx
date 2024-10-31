import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'ID',
        dataIndex: 'key',
    },
    {
        title: 'Surname',
        dataIndex: 'surname',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    }
];

const CustomTable = ({ data }) => <Table columns={columns} dataSource={data}/>;
export default CustomTable;