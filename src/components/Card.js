// componente de clase
import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

const Card = ({title, description, img, leftColor, rightColor}) => (
    <div className="card mx-auto Fitness-Card"
        style={{
            backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor||'#a8c0ff'}, ${rightColor||'#3f2b96'})`
        }}>
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img className="float-right" src={img || emptyImg} alt="exercise"/>
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Card