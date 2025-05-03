import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Booking from './Booking';

const DisplayResturent = ({resturent,setResturent}) => {
    let navigate = useNavigate();
    const handleClick = ({resturent,bookingCount,isAvaliable}) => {
        if (isAvaliable)
        {
            localStorage.setItem(resturent);
            navigate("/booking");
        }
        
    }
    return (
        <div>
           {resturent.map((el)=>
               <div>
                <h1>{el.resturent}</h1> 
                <button onClick={handleClick(el)}>{el.isAvaliable?"On":"Off"}</button>
        </div>
        )}
        </div>
    );
}

export default DisplayResturent