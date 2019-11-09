import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


const Start = ({allTestTitles, setUsersTime})  =>{

  useEffect(()=> {
    setUsersTime(1)
  },[])

  const timeHendle =(e)=>{
    setUsersTime(e.target.value)
  }

  return (
    <div className="App">
      <div className="start-page">
      <div className=''>
          <label htmlFor=""> Сколько минут требуется на тест?
            <input type="number" onChange={(e)=> timeHendle(e)}/>
          </label>
        </div>
        <h1> Выберите тест, который хотите пройти </h1>
        <div className='types-of-test'>
          {allTestTitles.map((title, index)=> {
            return (
              <Link to={{pathname: `/${title}`}} className="btn btn-primary" key={title+index}>
              Тест по  {title}
            </Link>
            )
          })}
        </div>
        <Link className="btn btn-primary" to='/create'> Придумать свой тест </Link>
      </div>
    </div>
  );
}

 
export default Start;
