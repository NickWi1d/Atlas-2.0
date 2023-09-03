import React from 'react'
import '../index.css'
import { useContext } from 'react'
import { MainPageContext } from './Contexts/MainPageContext'
import { query, where, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'


const SearchTrips = ( { setisSearch, isSearch } ) => {
  const { fromValue, setfromValue, toValue, settoValue, dateValue, setdateValue, amountValue, setamountValue, currentTrip, setCurrentTrip } = useContext(MainPageContext)
  // 
  async function getTrips(){
    setisSearch(true)
    const q = query(collection(db, "bus's trips"), where("from", "==", fromValue), where("to", "==", toValue), where("date", "==", dateValue), where("unarmored", ">=", Number(amountValue[0])));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCurrentTrip({date:doc.data().date, driver:doc.data().driver, finishTime:doc.data().finishTime, from:doc.data().from, price:doc.data().price, time:doc.data().time, to:doc.data().to, trip:doc.data().trip, type:doc.data().type, unarmored:doc.data().unarmored})
      console.log(currentTrip);
    })
  }
  return (
    <div className={isSearch ? 'SearchSectionActive' : 'SearchSection'}>
      <div className={isSearch ? 'SearchTitleDisable' : 'SearchTitle'}>
        <h2>Купить билет на автобус</h2>
        <h4>по Беларуси и России</h4>
      </div>
      <form className='SearchForm'>
        <div className='inputSection'> 
          <input
            className='requiredField'
            type='text'
            id='starting_point'
            value={fromValue}
            onChange={(e) => setfromValue(e.target.value)}
            onFocus={(e) => {e.target.select()}}
            required
          />
          <label htmlFor='starting_point' id='fromLabel' className='label-text'>Откуда?</label>
        </div>
        <hr className='hr'/>
        <div className='inputSection'> 
          <input
            className='requiredField'
            type='text'
            id='ending_point'
            value={toValue}
            onChange={(e) => settoValue(e.target.value)}
            onFocus={(e) => {e.target.select()}}
            required
          />
          <label htmlFor='ending_point' id='toLabel' className='label-text'>Куда?</label>
        </div>
        <hr className='hr'/>
        <div className='inputSection'> 
          <input
            className='requiredField'
            type='date'
            id='date'
            value={dateValue}
            onChange={(e) => setdateValue(e.target.value)}
          />
          <label htmlFor='date' id='dateLabel' className='label-text'>Дата</label>
        </div>
        <hr className='hr'/>  
        <div className='inputSection'> 
          <select
            className='requiredField'
            type='text'
            id='amount'
            value={amountValue}
            onChange={(e) => setamountValue(e.target.value)}
            required
          >
            <option value="1">1 паcсажир</option>
            <option value="2">2 паcсажира</option>
            <option value="3">3 пасcажира</option>
            <option value="4">4 пасcажира</option>
            <option value="5">5 пасcажиров</option>
            
          </select>
          <label htmlFor='amount' id='amountLabel' className='label-text'>Пассажиры</label>
        </div>
        <div className='buttunWrap'>
          <input 
            type="button" 
            className='searchButton'
            value="Найти" 
            onClick={() => getTrips()}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchTrips