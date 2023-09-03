import React from 'react'
import Header from "../components/Header"
import HomePage from './HomePage'
import SearchTrips from '../components/SearchTrips'
import { useState } from 'react'
import { MainPageContextProvider } from '../components/Contexts/MainPageContext'
import '../index.css'



const MainPage = () => {
    const [isSearch, setisSearch] = useState(false)

    return (
        <div className='mainPage'>
            <MainPageContextProvider>
                <Header/>
                <SearchTrips
                    setisSearch = {setisSearch}
                    isSearch = { isSearch }
                />
                <HomePage 
                    isSearch={isSearch}
                />
            </MainPageContextProvider>
        </div>
    )
}

export default MainPage