// const element = document.createElement('h1')

// element.innerText = 'Hello ReactJS'

// const container = document.getElementById('root')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'

// const user = {
//     firstName: 'Omar',
//     lastName: 'Ramirez',
//     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXnjwudDywy5WuyASjNbpjnoRmyLKFYyvcfuJJEtqRCcUBJeb'
// }

// function getName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function getAvatar(user) {
//     return `${user.avatar}`
// }

// function getGreetings(user) {
//     if (user) {
//         return <h1>Hello {getName(user)} to ReactJS</h1>
//     } else {
//         return <h1>Hello Stranger to ReactJS</h1>
//     }
// }

// // const element = <div>{getGreetings(user)}</div>
// // const element = <img src={getAvatar(user)} />
// const element = (
//     <div>
//         {getGreetings(user)}
//         <img src={getAvatar(user)} alt={getName(user)} />
//     </div>)
// ReactDOM.render(element, container)

const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(<App />, container)