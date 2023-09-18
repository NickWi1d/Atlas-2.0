import React, { useState, useEffect } from 'react'
import s from '../../pages/PersonalAccount.module.css'
import '../../index.css'
import { auth, db } from '../../firebase'
import { doc, setDoc } from "firebase/firestore"; 

const PersonalInfo = ( {currentEmail,  setCurrentEmail, currentUserFirstName, currentUserLastName, currentUserPhoneNumber, setCurrentUserFirstName, setCurrentUserLastName, setCurrentUserPhoneNumber, getInfoAboutUser } ) => {

    useEffect(() => {
        setTimeout(() => {
            getInfoAboutUser(auth.currentUser.uid)
        }, 1000);
        
    }, []);
    async function handleSunbmit(e, userId, email, firstName, lastName, phoneNumber) {
        e.preventDefault()
        await setDoc(doc(db, `User: ${userId}`, 'InfoAboutUser'), {
            "email": email,
            "FirstName": firstName,
            "LastName": lastName,
            "PhoneNumber": phoneNumber,
          });
    }
    return (
        <div className={s.tabcontent}>
            <h1>Личная информация</h1>
            <form action='action_page.php' onSubmit={(e) => handleSunbmit(e, auth.currentUser.uid, currentEmail, currentUserFirstName, currentUserLastName, currentUserPhoneNumber)}>
                <label htmlFor='email' className='personalInfoLabel'>Email</label>
                <input
                    type='text'
                    id='email'
                    className='personalInfo'
                    placeholder="Ваш email.."
                    value={currentEmail}
                    readOnly
                />
                <label htmlFor='fname' className='personalInfoLabel'>Имя</label>
                <input
                    type='text'
                    id='fname'
                    className='personalInfo'
                    placeholder="Ваше имя.."
                    value={currentUserFirstName}
                    onChange={(e) => setCurrentUserFirstName(e.target.value)}
                />
                <label htmlFor='lname' className='personalInfoLabel'>Фамилия</label>
                <input
                    type='text'
                    id='lname'
                    className='personalInfo'
                    placeholder="Ваша фамилия.."
                    value={currentUserLastName}
                    onChange={(e) => setCurrentUserLastName(e.target.value)}
                />
                <label htmlFor='PhoneNumber' className='personalInfoLabel'>Номер телефона</label>
                <input
                    type='text'
                    id='PhoneNumber'
                    className='personalInfo'
                    placeholder="Ваш номер телефона.."
                    value={currentUserPhoneNumber}
                    onChange={(e) => setCurrentUserPhoneNumber(e.target.value)}
                />

                <input type="submit" value="Сохранить"/>
            </form>
        </div>
    )
}

export default PersonalInfo