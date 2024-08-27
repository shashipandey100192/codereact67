import React from 'react'

function Childpage(props) {
  return (
    <div className='border p-3 bg-warning'>
        <h3>this is child element</h3>
        {props.abc}
        {props.age}
        <select>
        {props.data.map((d)=>{
            return(
                <option>{d.name}</option>
            )
        })}
        </select>
        <select>
        {props.data.map((d)=>{
            return(
                <option>{d.age}</option>
            )
        })}
        </select>
        <select>
        {props.data.map((d)=>{
            return(
                <option>{d.phone}</option>
            )
        })}
        </select>

        <select>
        {props.data.map((d)=>{
            return(
                <option>{d.name},{d.age},{d.phone}</option>
            )
        })}
        </select>

        <button type='button' onClick={props.mycun}>click here</button>

    </div>
  )
}

export default Childpage