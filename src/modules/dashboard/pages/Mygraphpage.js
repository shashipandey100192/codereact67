import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function Mygraphpage() {
    const [x, y] = useState([])
    const [b, c] = useState([])
    const a = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((d) => {
           
            // console.log(d.data);
            y(d.data)
            

        })

    }
useEffect(()=>{
    a();
},[])


    return (

        <Fragment>
            <BarChart
                width={800}
                height={400}
                data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="green" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="uv" fill="blue" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <Bar dataKey="amt" fill="red" />
            </BarChart>


            <BarChart
                width={800}
                height={400}
                data={x.zipcode}>
                <Tooltip />
                <Legend />
                <Bar dataKey="zipcode" fill="green" />
            </BarChart>
       

        </Fragment>

    )
}

export default Mygraphpage