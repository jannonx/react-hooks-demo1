import React, { useState ,useEffect} from 'react';

function Example() {
    const [count, setCount] = useState(0)//数组解构

    useEffect(()=>{
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
        </div>
    )
}

export default Example;