import React from 'react'
import PropTypes from 'prop-types'
import { Table, Space } from '../../libs/antd'
import { Link } from 'react-router-dom'

export default function TourProgramTable({ dataSource }) {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Mã code',
            dataIndex: 'code',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
        },
        {
            title: 'Thời gian diễn ra',
            dataIndex: 'duration',
            render: (value) => `${value} Ngày `,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
        },
        {
            title: 'Loại hình du lịch',
            dataIndex: ['tourType', 'name'],
        },
        {
            title: 'Thao tác',
            key: 'Action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`tourprogram/${record.id}`}>Xem chi tiết</Link>
                </Space>
            ),
        },
    ]
    return (
        <>
            <Table
                dataSource={dataSource.map((value, index) => ({
                    ...value,
                    key: index + 1,
                }))}
                columns={columns}
            ></Table>
        </>
    )
}

TourProgramTable.propTypes = {
    dataSource: PropTypes.array.isRequired,
}
