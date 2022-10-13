import React, { useState } from "react";

export default function Greet(){
    const [newName, setNewname] = useState({
        yName:""
    });


    function handleChange(event){
        const {name, value} = event.target;

        setNewname((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }

    return(
        <div className="container">
            <h1>Hello {newName.yName}</h1>
            <input onChange={handleChange}
            value={newName.yName}
            name='yName'  placeholder='Enter your Name' autoFocus/>
        </div>
    )
}