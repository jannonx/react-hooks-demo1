import React, { useState, createContext ,useContext } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const CountContext = createContext();


function Counter(){
    let count=useContext(CountContext)
    return (
    <h2>接受来自父组件的值count={count}</h2>
    )
   
}

function Example4() {
    const [count, setCount] = useState(0)//数组解构

    return (
        <div>
            <p> You click {count} tims</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click Me</button>


            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>

        </div>
    )
}

export default Example4;