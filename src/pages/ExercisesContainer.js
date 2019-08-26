import React from 'react'
import FatalError from './500'
import Loading from '../components/Loading'
import Exercises from './Exercises'
import url from '../config'
import useFetch from '../hooks/useFetch'

const ExercisesContainer = () => {
    
    const { data, loading, error } = useFetch(`${url}/exercises`)

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return <Exercises
        data = {data}
    />

}

export default ExercisesContainer