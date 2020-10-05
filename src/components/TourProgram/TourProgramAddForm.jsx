import FormItem from 'antd/lib/form/FormItem'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Input, Button, Select, InputNumber } from '../../libs/antd'
import { fetchTourTypesAction } from '../../redux/TourType/action'
import { createTourProgramsAction } from '../../redux/TourProgram/action'

const { Option } = Select

export default function TourProgramAddForm() {
    const tourTypes = useSelector((state) => state.tourType)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTourTypesAction())
    }, [dispatch])

    const onFinish = (values) => {
        dispatch(createTourProgramsAction(values))
        console.log('Success:', values)
    }
    console.log(tourTypes)
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <Form
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Mã Tour"
                name="code"
                rules={[{ required: true, message: 'Vui lòng nhập mã tour!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Tên Tour"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên tour!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Thời gian diễn ra"
                name="duration"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập Ngày khởi hãnh!',
                    },
                    {
                        type: 'number',
                        min: 1,
                        max: 99,
                        message: 'Ngày khởi hành không hợp lệ',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                label="Mô tả"
                name="description"
                rules={[{ required: true, message: 'Vui lòng thêm mô tả!' }]}
            >
                <Input />
            </Form.Item>

            <FormItem
                label="Loại hình du lịch"
                name="tourTypeId"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn loại hình du lịch!',
                    },
                ]}
            >
                <Select placeholder="Loại hình du lịch">
                    {(tourTypes || []).map(({ id, name }) => (
                        <Option value={id} key={id}>
                            {name}
                        </Option>
                    ))}
                </Select>
            </FormItem>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
