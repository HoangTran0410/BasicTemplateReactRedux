import { Modal } from '../libs/antd'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

export const GlobalModal = forwardRef((_, ref) => {
    const [visible, setVisible] = useState(false)
    const [component, setComponent] = useState(null)
    const [title, setTitle] = useState(null)
    useImperativeHandle(ref, () => ({
        open,
        close,
    }))

    const open = (title, component) => {
        setComponent(component)
        setTitle(title)
        setVisible(true)
    }

    const close = () => {
        setComponent(null)
        setVisible(false)
    }
    return (
        <Modal
            title={title || 'Modal dialog'}
            footer={null}
            onCancel={close}
            visible={visible}
        >
            {component}
        </Modal>
    )
})
