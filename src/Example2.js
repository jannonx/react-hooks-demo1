import React, { useState } from 'react';

let showSex = true

function Example2() {
    const [age, setAge] = useState(18)//default值
    const [sex, setSex] = useState("男")
    const [work, setWork] = useState("前端程序员")

    return (
        <div>
            <p> janonx </p>
            <p>  今年：{age}</p>
            <p>  性别：{sex}</p>
            <p>  工作：{work}</p>
        </div>
    )
}

export default Example2;