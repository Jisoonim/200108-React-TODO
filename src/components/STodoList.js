import React from 'react'

const STodoList = ({listData}) => {

    const list = listData.map(todo => <li key={todo.tno}><b>{todo.tno}</b>{todo.title}</li>)

    return (
        <div>
            {list}
        </div>
    )
}

export default STodoList