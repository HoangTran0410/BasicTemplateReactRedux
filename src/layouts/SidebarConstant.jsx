import React from 'react'
import { FundProjectionScreenOutlined } from '@ant-design/icons'

const SidebarConstant = [
    {
        subMenu: 'Màn hình chính',
        icon: <FundProjectionScreenOutlined />,
        children: [
            {
                itemGroup: 'Item Group 1',
                key: 'itemg1',
                item: [
                    {
                        title: 'Item 1',
                        icon: <FundProjectionScreenOutlined />,
                        to: '/admin/1',
                    },
                    {
                        title: 'Item 1',
                        icon: <FundProjectionScreenOutlined />,
                        to: '/admin/2',
                    },
                ],
            },
            {
                itemGroup: 'Item Group 1',
                key: 'itemg2',
                item: [
                    {
                        title: 'Item 1',
                        icon: <FundProjectionScreenOutlined />,
                        to: '/admin/3',
                    },
                    {
                        title: 'Item 1',
                        icon: <FundProjectionScreenOutlined />,
                        to: '/admin/4',
                    },
                ],
            },
        ],
    },
    //Demo data
    {
        subMenu: 'Quản lý tour',
        icon: <FundProjectionScreenOutlined />,
        children: [
            {
                itemGroup: 'Item Group 1',
                item: [
                    {
                        title: 'Item 1',
                        icon: <FundProjectionScreenOutlined />,
                        to: '/admin/5',
                    },
                ],
            },
        ],
    },
    {
        itemGroup: 'Item Group 1',
        item: [
            {
                title: 'Item 1',
                icon: <FundProjectionScreenOutlined />,
                to: '/admin/6',
            },
        ],
    },
]

export default SidebarConstant
