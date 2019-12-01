import React, { useReducer } from 'react';



function Example5() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)//第二个参数：初始值


    return (
        <div>
            <h2>现在的分数是:{count}</h2>
            <button onClick={() => { dispatch('add') }}>加法</button>
            <button onClick={() => { dispatch('sub') }}>减法</button>
        </div>
    )
}


export default Example5

// function countReducer(state, action) {

//     switch (action.type) {
//         case 'add':
//             return state + 1
//         case 'sub':
//             return state - 1
//         default:
//             return state
//     }
// }