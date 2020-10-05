import React, { useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import { Layout, Menu, Avatar, Dropdown } from '../libs/antd'
import './AdminLayout.css'
import Sidebar from './Sidebar'

const { Header, Sider, Content } = Layout

export default function AdminLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                trigger={null}
                collapsedWidth={0}
                theme="dark"
                collapsible
                collapsed={collapsed}
                width={250}
            >
                <div className="brand">Travel Tour</div>
                <Sidebar />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background site-layout-header"
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <Dropdown
                        overlay={
                            <Menu theme="light" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        }
                    >
                        <Avatar
                            className="avatar-logo"
                            src="https://ui-avatars.com/api/?rounded=true"
                        />
                    </Dropdown>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: '100%',
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}
