import React from 'react'

const STodoList = ({listData, pageInfo, changePageNum}) => {

    const list = listData.map(todo => <li key={todo.tno}><b>{todo.tno}</b>{todo.title}</li>)

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