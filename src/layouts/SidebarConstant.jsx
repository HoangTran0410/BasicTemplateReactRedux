import React from 'react'
import { FundProjectionScreenOutlined } from '@ant-design/icons'

const SidebarConstant = [
    {
        item: [
            {
                title: 'Màn hình chính',
                icon: <FundProjectionScreenOutlined />,
                to: '/admin',
            },
        ],
    },
    {
        item: [
            {
                title: 'Loại hình du lịch',
                icon: <FundProjectionScreenOutlined />,
                to: '/admin/tourtype',
            },
        ],
    },
    {
        item: [
            {
                title: 'Địa điểm du lịch',
                icon: <FundProjectionScreenOutlined />,
                to: '/admin/place',
            },
        ],
    },
    {
        subMenu: 'Quản lý tour',
        icon: <FundProjectionScreenOutlined />,
        children: [
            {
                item: [
                    {
                        title: 'Danh sách chương trình',
                        icon: <FundProjectionScreenOutlined />,
                        to: '/admin/tourprogram',
                    },
                    {
                        title: 'Danh sách tour',
                        icon: <FundProjectionScreenOutlined />,
                        to: '/admin/tour',
                    },
                ],
            },
        ],
    },
    {
        subMenu: 'Quản lý khách',
        icon: <FundProjectionScreenOutlined />,
        children: [],
    },
]

export default SidebarConstant
