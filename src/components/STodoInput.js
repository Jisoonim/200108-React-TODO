import React, {useState} from 'react'

import {addToServer } from "../modules/stodo";

const STodoInput = ({changePageNum}) => {

    const [title, setTitle] = useState('')
    const [targetDate, setTargetDate] = useState('2020-01-08')

    const handleClick = () => {
        addToServer(title,targetDate).then((response) => {
            console.log(response)
            alert(response.data.tno)
            changePageNum(1)
        })
    }

    return(
        <div>
            <h6>Todo Input</h6>
            <input type='text' onChange ={(e) => { setTitle(e.target.value) }} value ={title}  ></input>
            <input type='date' onChange ={(e) => { setTargetDate(e.target.value) }} value ={targetDate}></input>
            <button onClick= {handleClick}>SAVE</button>
        </div>
    )
}
export default STodoInput