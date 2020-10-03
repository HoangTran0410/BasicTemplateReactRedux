import React, { useCallback } from 'react'
import TourProgramDetail from '../components/TourProgram/TourProgramDetail'
import TourProgramApi from '../api/TourProgramApi'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function TourProgramDetailPage() {
    const { id } = useParams()
    const [data, setData] = useState({})

    const getData = useCallback(async () => {
        const result = await TourProgramApi.getTourProgramDetailById(id)
        setData(result)
    }, [id])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div>
            <TourProgramDetail data={data} />
        </div>
    )
}
