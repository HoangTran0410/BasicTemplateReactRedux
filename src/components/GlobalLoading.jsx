import React, { forwardRef, useImperativeHandle, useState } from 'react'

import { Spin } from '../libs/antd'

export const GlobalLoading = forwardRef(({ children }, ref) => {
    const [loading, setLoading] = useState(false)
    useImperativeHandle(ref, () => ({
        setLoading,
    }))
    return (
        <Spin tip="Loading..." spinning={loading}>
            {children}
        </Spin>
    )
})
