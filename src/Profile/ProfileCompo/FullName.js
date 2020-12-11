import React from 'react'

const FullName = (props) => {
    console.log(this,props)
    return (
        <div className = 'name'>
            <h1>Full name : {props.name}</h1>
        </div>
    )
}


export default FullName
