import React ,{useState,useEffect} from 'react'
import './Clock.css'

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Set an interval to update the time every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
  return (
    <div className='clock'>{time.toLocaleTimeString()}</div>
  )
}

export default Clock