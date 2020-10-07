import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TourTypeBar from '../components/TourType/TourTypeBar'
import TourTypeTable from '../components/TourType/TourTypeTable'
import { fetchTourTypesAction } from '../redux/TourType/action'

export default function TourTypePage() {
    const tourType = useSelector((state) => state.tourType)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTourTypesAction())
    }, [dispatch])
    return (
        <>
            <TourTypeBar />
            <TourTypeTable dataSource={tourType} />
        </>
    )
}
