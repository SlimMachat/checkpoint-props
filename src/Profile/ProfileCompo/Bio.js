import React from 'react'

const Bio = (props) => {
    console.log(this,props)
    return (
        <div className ="bios">
         <h2>BIO : <br/> {props.Bioo}</h2>   
        </div>
    )
}

export default Bio
