
import React, {useState} from 'react';

const Hook_useState = () => {
    const[count, setCount] = useState(4)

const decrementCount=() => {
 setCount(count-1)
}
const incrementCount=() => {
  setCount(count+1)
 }

  return (
    <div>
       <button onClick={decrementCount}>-</button>
       <span>{count}</span>
       <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Hook_useState;
