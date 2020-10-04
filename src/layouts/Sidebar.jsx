import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../libs/antd'
import SidebarConstant from './SidebarConstant'

const { SubMenu } = Menu

export default function Sidebar() {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/admin']}>
            {SidebarConstant.map(({ subMenu, icon, children }) => {
                if (subMenu && subMenu !== '')
                    return (
                        <SubMenu title={subMenu} icon={icon || null}>
                            {(children || []).map(
                                ({ item, itemGroup, key }) => {
                                    if (itemGroup && itemGroup !== '')
                                        return (
                                            <Menu.ItemGroup
                                                title={itemGroup}
                                                key={key}
                                            >
                                                {(item || []).map(
                                                    ({ title, icon, to }) => {
                                                        return (
                                                            <Menu.Item
                                                                icon={
                                                                    icon || null
                                                                }
                                                                key={to}
                                                            >
                                                                {to && (
                                                                    <Link
                                                                        to={to}
                                                                    >
                                                                        {title}
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        )
                                                    }
                                                )}
                                            </Menu.ItemGroup>
                                        )
                                    return null
                                }
                            )}
                        </SubMenu>
                    )
                return null
            })}
        </Menu>
    )
}
