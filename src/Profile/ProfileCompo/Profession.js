import React from 'react'

const Profession = (props) => {
    console.log(this,props)
    return (
        <div style = {{color :"black" , textAlign : "justify" ,marginLeft:"20px"}}>
           <h3>Profession : <br/> {props.prof}</h3> 
        </div>
    )
}

export default Profession
