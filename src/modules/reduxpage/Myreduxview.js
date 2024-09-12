import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { dname,increment } from './Myactions'

function Myreduxview() {
    const count = useSelector((state) => state.counter.value)
    const sname = useSelector((state) => state.counter.rname)
    const dispatch = useDispatch();


  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1>use of Redux </h1>
              <h1>  {count}</h1>
                <h1>{sname}</h1>
                <button type='button' onClick={()=>dispatch(dname())}>change name</button>
                <button type='button' onClick={()=>dispatch(increment())}>increment</button>

            </div>
        </div>
    </div>
  )
}

export default Myreduxview