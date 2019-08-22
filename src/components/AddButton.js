import React from 'react'
import './styles/AddButton.css'
import ButtonImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/exercise/new">
        <img className="Fitness-Add" src={ButtonImg} alt="Add Exercise" />
    </Link>
)

export default AddButton