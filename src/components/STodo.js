import React from 'react'
import {deleteToServer} from "../modules/stodo";

const STodo = ({todo, changePageNum}) => {

    const handleClick = (e) => {
        deleteToServer(todo.tno).then(res => {
            alert("deleted........")
            console.log(res)
            changePageNum(1)
        })

    }
    return (
        <div>
            <h5>{todo.tno}</h5>
            <h4>{todo.title}</h4>
            <h5>{todo.targetDate}</h5>
            <button onClick={handleClick}>DELETE</button>
        </div>

    )
}

export default STodo