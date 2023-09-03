import React from 'react'
import Header from '../components/Header'
import Login from '../components/Auth/Login'
import SinUp from '../components/Auth/SinUp'
import PersonalAccount from './PersonalAccount'
import { useState } from 'react'
import '../index.css'


const NavBarPersonalAccount = () => {
    const [isCurrentUser, setIsCurrentUser] = useState(true)
    const [isHaveAccount, setIsHaveAccount] = useState(true)

    const [currentEmail, setCurrentEmail] = useState(null)
  return (
    <div className='NavBarPA'>
        <Header/>
        {isCurrentUser ?
                        <PersonalAccount                             
                            setIsCurrentUser = { setIsCurrentUser }

                            currentEmail={currentEmail}
                            setCurrentEmail={setCurrentEmail}
                        /> 
                        : 
                        isHaveAccount ? <Login setIsHaveAccount ={setIsHaveAccount} setIsCurrentUser={setIsCurrentUser}/>:<SinUp setIsHaveAccount ={setIsHaveAccount} setIsCurrentUser={setIsCurrentUser}/> }
    </div>
  )
}

export default NavBarPersonalAccount