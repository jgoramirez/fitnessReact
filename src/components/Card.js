// componente de clase
import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'


class Card extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         image: `${exerciseImg}`
    //     }
    // }

    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.setState({
    //             image: "https://github.com/RpL02/FitnessApp/blob/styles/src/images/exercise.png?raw=true"
    //         })
    //     }, 5000)
    // }

    render() {
        const {title, description, img, leftColor, rightColor} = this.props
        return (
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
    }
}

export default Card