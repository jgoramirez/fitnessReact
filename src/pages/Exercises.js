import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'

const Exercises = ({data}) => (
    <div>
        <Welcome 
            username="Omar"
        />
        <ExerciseList 
            exercises={data}
        />
        <AddButton />                
    </div>
)

export default Exercises