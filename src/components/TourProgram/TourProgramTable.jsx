import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '../../libs/antd'

export default function TourProgramTable({ dataSource }) {
    console.log(dataSource)

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
            render: (value) => <p>{value} Ngày</p>,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
        },
        {
            title: 'Mã code',
            dataIndex: 'code',
        },
        {
            title: 'Mã code',
            dataIndex: 'code',
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
