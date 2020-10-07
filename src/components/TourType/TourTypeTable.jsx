import { Button, Space, Table } from '../../libs/antd'
import React from 'react'
import PropTypes from 'prop-types'

export default function TourTypeTable({ dataSource }) {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
        },
        {
            title: 'Thao tác',
            key: 'Action',
            render: () => (
                <Space size="middle">
                    <Button type="primary">Xem chi tiết</Button>
                </Space>
            ),
        },
    ]
    return (
        <div>
            <Table
                dataSource={dataSource.map((value, index) => ({
                    ...value,
                    key: index + 1,
                }))}
                columns={columns}
            />
        </div>
    )
}

TourTypeTable.propTypes = {
    dataSource: PropTypes.array.isRequired,
}
