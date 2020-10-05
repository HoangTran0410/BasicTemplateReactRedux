import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from '../libs/antd'
import SidebarConstant from './SidebarConstant'

const { SubMenu } = Menu

export default function Sidebar() {
    let { pathname } = useLocation()
    const componentSubMenu = (subMenu, icon, children) => (
        <SubMenu title={subMenu} icon={icon || null}>
            {(children || []).map(({ item, itemGroup }) =>
                itemGroup
                    ? componentMenuGroup(item, itemGroup)
                    : componentMenuItem(item)
            )}
        </SubMenu>
    )

    const componentMenuGroup = (item, itemGroup) => (
        <Menu.ItemGroup title={itemGroup}>
            {componentMenuItem(item)}
        </Menu.ItemGroup>
    )

    const componentMenuItem = (item) =>
        (item || []).map(({ title, icon, to }) => (
            <Menu.Item icon={icon || null} key={to}>
                {to && <Link to={to}>{title}</Link>}
            </Menu.Item>
        ))
    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            defaultSelectedKeys={['/admin']}
        >
            {SidebarConstant.map(
                ({ subMenu, itemGroup, item, icon, children }) => {
                    if (subMenu)
                        return componentSubMenu(subMenu, icon, children)
                    if (itemGroup) return componentMenuGroup(item, itemGroup)
                    if (item) return componentMenuItem(item)
                    return null
                }
            )}
        </Menu>
    )
}
