import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Tabs, Divider, Steps } from '../../libs/antd'
import { BarcodeOutlined } from '@ant-design/icons'
import './styles/TourProgramDetail.css'
import { formatDateToShortDate, formatNumberToPrice } from '../../utils/format'

const { TabPane } = Tabs
const { Step } = Steps

export default function TourProgramDetail({ data }) {
    console.log(data.tourPlaces)
    const columnsTour = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Mã tour',
            dataIndex: 'code',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            render: (value) => formatNumberToPrice(value),
        },
        {
            title: 'Số lượng tối đa',
            dataIndex: 'quantity',
        },
        {
            title: 'Thời gian khỏi hành',
            dataIndex: 'dateStart',
            render: (value) => formatDateToShortDate(value),
        },
    ]
    return (
        <div>
            <div className="detail-tour-program">
                <div className="row detail-tour-program__title">
                    <h1 className="col">
                        {data.name}
                        <p>
                            <BarcodeOutlined style={{ marginRight: 4 }} />
                            <span>{data.code}</span>
                        </p>
                    </h1>
                    <div className="col">
                        <Link to="/admin/tourprogram">Về xem danh sách</Link>
                    </div>
                </div>
                <div className="detail-tour-program__info">
                    {data.name}
                    <br />
                    {data.code}
                    <br />
                    {data.description}
                    <br />
                    {data.duration + ' Ngày'}
                    <br />
                    {data.tourType?.name}
                </div>
            </div>
            <Divider />
            <Tabs type="card">
                <TabPane tab="Ngày khởi hành tour" key="1">
                    <Table
                        dataSource={
                            (data.tours || []).map((value, index) => ({
                                ...value,
                                key: index + 1,
                            })) || []
                        }
                        columns={columnsTour}
                    />
                </TabPane>
                <TabPane tab="Hành trình tour" key="2">
                    <Steps type="navigation" size="small" onChange>
                        {data.tourPlaces &&
                            data.tourPlaces
                                .sort(
                                    (a, b) => a.ordinalNumber - b.ordinalNumber
                                )
                                .map(({ placeName }) => (
                                    <Step title={placeName} />
                                ))}
                    </Steps>
                </TabPane>
            </Tabs>
        </div>
    )
}

TourProgramDetail.propTypes = {
    data: PropTypes.object.isRequired,
}
