import React, { useState } from 'react'

const Booking = ({ resturent, setResturent }) => {
    
    const [count,setCount] = useState(0);

    const handleSubmit = () => {
        if (resturent.isAvaliable)
            {
                if (count > 10)
                    {
                        alert("You cannot book more than 10 seates");
                        setCount(0);
                    }
                    else {
                    setResturent({ bookingCount: count });
                    alert(`Thank You for booking our service`);
            }
        }
    }
    const handleChange = (el) => {
        setCount(el.target.value)
    }

  return (
      <div>
          <h1>{ resturentName}</h1>
          <input type="number" placeholder='Enter number of seates you want to book' onChange={handleChange()} />
          <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Booking