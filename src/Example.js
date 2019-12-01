import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Index() {
    useEffect(()=>{
        console.log(`Index...useEffect=>老弟，你来了！Index页面`)

        return ()=>{//解绑
            console.log(`Index...useEffect=>老弟，你走了！Index页面`)
        }  
    },[])//空，被销毁解绑才执行;非空，比如count状态发生改变，都会执行
    return (
        <h2>JAnonx blog</h2>
    )
}

function List() {
    useEffect(()=>{
        console.log(`List...useEffect=>老弟，你来了！List页面`)
    })
    return (
        <h2>List Page</h2>
    )
}

function Example() {
    const [count, setCount] = useState(0)//数组解构

    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
    })

    return (
        <div>
            <p> You click {count} tims</p>
            <button onClick={() => {
                setCount(count + 1)
            }
            }>
                Click Me
          </button>

            <Router >
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>

                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}

export default Example;