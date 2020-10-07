import { notification } from '../libs/antd'

export const showError = (error) => {
    if (error) {
        const data = error.response?.data || {
            message: '',
            description: 'Check your network',
        }
        notification.error({
            message: data.message || error.message,
            description: data.description,
        })
    }
    return
}

export const showSuccess = (message) => {
    notification.success({
        message,
    })
}
