import { createContext, useState } from 'react'


const MainPageContext = createContext();

const MainPageContextProvider = ({ children }) => {
    const [fromValue, setfromValue] = useState('Минск')
    const [toValue, settoValue] = useState('Брест')
    const [dateValue, setdateValue] = useState('2023-03-18')
    const [amountValue, setamountValue] = useState('1 пасажир')

    const [currentTrip, setCurrentTrip] = useState({
      date: null,
      driver:null,
      finishTime:null,
      from:null, 
      price:null, 
      time:null, 
      to:null, 
      trip:null, 
      type:null, 
      unarmored:null
    })
  
    return (
      <MainPageContext.Provider value={{ fromValue, setfromValue, toValue, settoValue, dateValue, setdateValue, amountValue, setamountValue, currentTrip, setCurrentTrip }}>
        {children}
      </MainPageContext.Provider>
    );
  };

  export { MainPageContext, MainPageContextProvider };