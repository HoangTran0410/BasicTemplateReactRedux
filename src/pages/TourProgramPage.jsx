import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTourProgramsAction } from '../redux/TourProgram/action'
import TourProgramTable from '../components/TourProgram/TourProgramTable'
import TourProgramBar from '../components/TourProgram/TourProgramBar'

export default function TourProgramPage() {
    const tourProgram = useSelector((state) => state.tourProgram)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTourProgramsAction())
    }, [dispatch])
    return (
        <>
            <TourProgramBar />
            <TourProgramTable dataSource={tourProgram} />
        </>
    )
}
