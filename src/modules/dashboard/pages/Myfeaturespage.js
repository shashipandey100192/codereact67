import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myeveningpage from './theams/Myeveningpage';
import Mymorningpage from './theams/Mymorningpage';
import Mynightpage from './theams/Mynightpage';

function Myfeaturespage() {

    const mymsg = () => {
        // alert("welcome to reactjs");
        toast.success("welcome to reactjs", { theme: "dark", });
    }

    const [x, y] = useState("this is default page");
    const changeoption = (e) => {
        y(e.target.value);
        if (e.target.value === "morning") {
            toast.success(e.target.value);
        }
        else if (e.target.value === "evening") {
            toast.info(e.target.value);
        }
        else if (e.target.value === "night") {
            toast.warning(e.target.value);
        }
        else {
            toast(e.target.value);
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <button className='btn btn-success' onClick={mymsg}>show msg</button>
                    <ToastContainer
                        position="top-left" />
                    <select onChange={changeoption}>
                        <option>select action</option>
                        <option>morning</option>
                        <option>evening</option>
                        <option>night</option>
                    </select>
                    {x === "morning" ? <Mymorningpage /> : x === "evening" ? <Myeveningpage /> : x === "night" ? <Mynightpage /> : <h1>This is Default page</h1>}

                </div>
            </div>
        </div>
    )
}

export default Myfeaturespage