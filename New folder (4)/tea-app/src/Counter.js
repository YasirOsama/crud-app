import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement} from './Salice'
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>add</button>
            <span> {count} </span>
            <button onClick={() => dispatch(decrement())}>delete</button>
        </div>
    )
}

export default Counter
