import { Button } from '../../libs/antd'
import React from 'react'
import TourProgramAddForm from './TourProgramAddForm'

export default function TourProgramBar() {
    const click = () => {
        global.Modal.open('Thêm chương trình tour', <TourProgramAddForm />)
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 10,
            }}
        >
            <h3>Danh sách chương trình tour</h3>
            <div>
                <Button onClick={click} type="primary">
                    Thêm
                </Button>
            </div>
        </div>
    )
}
