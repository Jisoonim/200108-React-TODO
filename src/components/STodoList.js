import React from 'react'
import STodo from './STodo'

const STodoList = ({listData, pageInfo, changePageNum}) => {

    const list = listData.map(todo => <li key={todo.tno}><STodo todo={todo} changePageNum={changePageNum}></STodo></li>)

    return (
        <div>
            <ul>
            {list}
            </ul>
            <div>
                 <button onClick = {() => {changePageNum(pageInfo.pageNumber)}}>PREV</button>
                <button onClick = {() => {changePageNum(pageInfo.pageNumber + 2)}}>NEXT</button>
            </div>
        </div>
    )
}

export default STodoList