import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTourProgramsAction } from '../redux/TourProgram/action'
import TourProgramTable from '../components/TourProgram/TourProgramTable'

export default function TourProgramPage() {
    const tourProgram = useSelector((state) => state.tourProgram)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTourProgramsAction())
    }, [dispatch])
    return (
        <div>
            <h3>Danh sách chương trình tour</h3>
            <TourProgramTable dataSource={tourProgram} />
        </div>
    )
}
