import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0)//数组解构

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