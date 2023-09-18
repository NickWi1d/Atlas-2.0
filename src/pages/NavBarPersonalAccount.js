import React from 'react'
import Header from '../components/Header'
import Login from '../components/Auth/Login'
import SinUp from '../components/Auth/SinUp'
import PersonalAccount from './PersonalAccount'
import { useState } from 'react'
import '../index.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'


const NavBarPersonalAccount = () => {
    const [isCurrentUser, setIsCurrentUser] = useState(true)
    const [isHaveAccount, setIsHaveAccount] = useState(true)

    const [ currentUserFirstName, setCurrentUserFirstName ] = useState('')
    const [ currentUserLastName, setCurrentUserLastName ] = useState('')
    const [ currentUserPhoneNumber, setCurrentUserPhoneNumber ] = useState('')

    const [currentEmail, setCurrentEmail] = useState(null)

    async function getInfoAboutUser(userId){
      const docRef = doc(db, `User: ${userId}`, 'InfoAboutUser');
      const docSnap = await getDoc(docRef);
      setCurrentUserFirstName(docSnap.data().FirstName)
      setCurrentUserLastName(docSnap.data().LastName)
      setCurrentUserPhoneNumber(docSnap.data().PhoneNumber)
    }
  return (
    <div className='NavBarPA'>
        <Header/>
        {isCurrentUser ?
                        <PersonalAccount                             
                            setIsCurrentUser = { setIsCurrentUser }

                            currentEmail={currentEmail}
                            setCurrentEmail={setCurrentEmail}

                            currentUserFirstName={currentUserFirstName}
                            currentUserLastName={currentUserLastName}
                            currentUserPhoneNumber={currentUserPhoneNumber}

                            setCurrentUserFirstName={setCurrentUserFirstName}
                            setCurrentUserLastName={setCurrentUserLastName}
                            setCurrentUserPhoneNumber={setCurrentUserPhoneNumber}
                            
                            getInfoAboutUser={getInfoAboutUser}
                        /> 
                        : 
                        isHaveAccount ? <Login
                                          setIsHaveAccount ={setIsHaveAccount}
                                          setIsCurrentUser={setIsCurrentUser}

                                          getInfoAboutUser={getInfoAboutUser}
                                         />
                                         : <SinUp setIsHaveAccount ={setIsHaveAccount} setIsCurrentUser={setIsCurrentUser}/> }
    </div>
  )
}

export default NavBarPersonalAccount