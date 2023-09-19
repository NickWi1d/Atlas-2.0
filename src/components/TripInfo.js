import React from 'react'
import { MainPageContext } from './Contexts/MainPageContext'
import { useContext } from 'react'
import '../index.css'

const TripInfo = () => {
    const { currentTrip } = useContext(MainPageContext)
    function getWeekDay(date) {
        let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        let months = ['января', 'февраля', 'марта', 'мая', 'июня', 'июля', 'августа', 'сентября',  'октября', 'ноября', 'декабря'];
        let newDate = new Date(date)
        let startFinalDate = newDate.getDate() + ' ' + months[newDate.getMonth()] + ', ' + days[newDate.getDay()]
        let finalFate = currentTrip.time > currentTrip.finishTime ? newDate.getDate()+1 + ' ' + months[newDate.getMonth()] + ', ' + days[newDate.getDay()] : startFinalDate
        return [finalFate, startFinalDate]
      }
    function getDurationTime(firstDate, secondDate){         
        let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]);
        let different = (getDate(secondDate) - getDate(firstDate));
        let differentRes, hours, minuts;
        if(different > 0) {
            differentRes = different;
            hours = Math.floor((differentRes % 86400000) / 3600000);
            minuts = Math.round(((differentRes % 86400000) % 3600000) / 60000);
        } else {
            differentRes = Math.abs((getDate(firstDate) - getDate(secondDate)));
            hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
            minuts = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
        }
        return [hours, minuts]
    }
  return (
    <>
        <div className='TripInfo'>
            <div className='sectionFrom'>
                <div className='timeStyle'>{currentTrip.time}
                    <div className='dateStyle'>{getWeekDay(currentTrip.date)[1]}</div>
                </div>
                <div className='fromStyle'>{currentTrip.from}</div>
            </div>
            <div className='sectionTo'>
                <div className='timeStyle'>{currentTrip.finishTime}
                    <div className='dateStyle'>{getWeekDay(currentTrip.date)[0]}</div>
                </div>
                <div className='toStyle'>{currentTrip.to}</div>
            </div>
            <div className='sectionPrice'>
                <div className='priceStyle'>{currentTrip.price} Br</div>
                <div className='paymentStyle'>Наличными или картой</div>
                <div>за 1 место</div>
                <div>свободно { currentTrip.unarmored } мест</div>
            </div>
            <div className='sectionBtn'>
                <button type="button" className='orderBtn'>Заказать
                    <div>свободно { currentTrip.unarmored } мест</div>
                </button>
            </div>
        </div>
        <div className='ShowDitail'>
            <div className='ShowDetailBox'>
                <button className='ShowDetailBtn'
                >
                    Показать детали

                </button> 
            </div>
            <div className='TypeOfBusBox'>
                <div className='TypeOfBus'>Mercedes-Benz, Sprinter</div> 
            </div>
            <div className='DurationBox'>
                <div className='Duration'>В пути: {getDurationTime(currentTrip.time, currentTrip.finishTime)[0]} ч {getDurationTime(currentTrip.time, currentTrip.finishTime)[1]} мин</div> 
            </div>
        </div>
    </>
  )
}

export default TripInfo