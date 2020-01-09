import React, {useState, useEffect} from 'react'

import STodoInput from './STodoInput';
import STodoList from './STodoList';
import { getServerData } from "../modules/stodo";

const STodoWrapper = () => {

    const [listData, setListData] = useState([])

    const changePageNum = (pageValue) => {
        console.log("go to " + pageValue)
        getServerData(pageValue).then(res => {
            console.log("changePageNum....")
            setListData(res.content)
        })
    }

    useEffect(() => {
        getServerData(1).then(res => {
            console.log("use effect")
            setListData(res.content)
        })
    },[])


    return (
        <div>
            <h1>Todo Component with Axios</h1>
            <STodoInput changePageNum ={changePageNum}></STodoInput>
            <STodoList listData = {listData}></STodoList>
        </div>
    )

}
export default STodoWrapper