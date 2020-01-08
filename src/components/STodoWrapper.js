import React, {useState} from 'react'
import{getServerData} from "../modules/stodo";
import STodoInput from './STodoInput'
 

const STodoWrapper = () => {

    const movePage = (page) => {
        console.log("movePage: " + page)
        getServerData(page).then(result => {
            console.log(result)
        })
    }

    return (
        <div>
            <h1>Todo Component with Axios</h1>
            <STodoInput movePage = {movePage}></STodoInput>
        </div>
    )
}

export default STodoWrapper