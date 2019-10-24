import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';


const Timer = ()  =>{
    const [time, setTime]=useState(10);
    let history = useHistory();

    useEffect(()=> {
        let timer =
            setTimeout(()=> {
                if(time>0){
                    setTime(time-1)
                }
                else{
                    history.push('/result')                 
                }
            }, 1000)
    }, [time])
    



    // useEffect(() => {
    //     const timer = setInterval(()=> {
    //     }, 1000)
    //     // return () => {
    //     //   history.push('/result')
    //     // }
    // },[])

    // console.log(time)




    // const [seconds, setSeconds] = useState(10);
    // const [timer, setTimer] = useState(null);
    // let history = useHistory();
  
    // useEffect(() => {
    //   if (!timer) {
    //     setTimer(setInterval(() => {
    //       if (seconds > 0) {
    //         setSeconds(seconds => seconds - 1);
    //       }
    //     }, 1000));
    //   }
  
    //   if (!seconds) {
    //     setTimer(null);
    //     clearTimeout(timer);
    //     history.push(`/result`);
    //   }
    // }, [seconds]);
    
    return (
        <div className="result">
            Время: {time}
        </div>
    );
}
 
export default Timer;
