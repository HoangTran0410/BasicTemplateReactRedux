import { notification } from '../libs/antd'

export const showError = () => {}

export const showSuccess = (message) => {
    notification.success({
        message,
    })
}
