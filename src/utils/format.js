export const formatNumberToPrice = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number)
}

export const formatDateToShortDate = (date) => {
    return new Date(date).toLocaleString()
}
