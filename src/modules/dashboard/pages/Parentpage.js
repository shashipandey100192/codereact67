import React from 'react'
import Childpage from './Childpage'

function Parentpage() {
    const name = "kumar";
    const age = 80;
    const mydata = [
        {
            name: "kumar",
            age: 10,
            phone: '875154754'
        },
        {
            name: "ravi",
            age: 20,
            phone: '8799999'
        },
        {
            name: "mohan",
            age: 25,
            phone: '77777777'
        }
    ];

const myfunc = ()=>{

        alert("this is parent  funct");
}

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 bg-success p-5'>
                    <h1>this is parent element</h1>
                    <Childpage abc={name} age={age} data={mydata} mycun = {myfunc}></Childpage>
                </div>
            </div>
        </div>
    )
}

export default Parentpage