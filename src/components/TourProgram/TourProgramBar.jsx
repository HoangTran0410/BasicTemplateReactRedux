import { Button } from '../../libs/antd'
import React from 'react'
import TourProgramAddForm from './TourProgramAddForm'

export default function TourProgramBar() {
    const click = () => {
        global.Modal.open('Thêm chương trình tour', <TourProgramAddForm />)
    }
    return (
        <div>
            <h3>Danh sách chương trình tour</h3>
            <div>
                <Button onClick={click}>click</Button>
            </div>
        </div>
    )
}
