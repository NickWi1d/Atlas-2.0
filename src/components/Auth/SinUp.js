import React from 'react'
import '../../index.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../firebase';
import { startSession } from '../../session';
import { auth, db } from '../../firebase'
import { doc, setDoc } from "firebase/firestore"; 

const SinUp = ({setIsHaveAccount, setIsCurrentUser}) => {
  let WindowHigh = document.documentElement.clientHeight - 200

  const [error, setError] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('')
  const [passwordSignUp, setPasswordSignUp] = useState('')

  async function changeUserData(userId, email){
    await setDoc(doc(db, `User: ${userId}`, 'InfoAboutUser'), {
      "email": email,
      "FirstName": "",
      "LastName": "",
      "PhoneNumber": "",
    });
    await setDoc(doc(db, `users`, userId), {})
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      let registerResponse = await createUser(emailSignUp, passwordSignUp);
      startSession(registerResponse.user);
      setIsCurrentUser(true)
      changeUserData(auth.currentUser.uid, emailSignUp)
      // navigate("/user");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  }

  return (
    <form onSubmit={onSubmit} className={'signUpForm'} style={{height: `${WindowHigh}px`}}>
      <h1>Зарегистрироваться</h1>
      <p>Пожалуйста заполните эту форму, что бы создать учетётную запись</p>
      {error && <>{error}</>}
      {/* <hr /> */}
      <label htmlFor="email"><b>Email</b></label>
      <input type="email" name="email" className='emailInput' placeholder="Введите email" required value={emailSignUp} onChange={(e) => setEmailSignUp(e.target.value)}/>

      <label htmlFor="password"><b>Пароль</b></label>
      <input type="password" name="password" className='passwordInput' placeholder="Введите пароль" value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} required/>

      <button type="submit" className='SignUpBtn'>Зарегистрироваться</button>
      <div>
        <p>Уже есть аккаунт? <Link to='/NavBarPA' onClick={()=>setIsHaveAccount(true)}>Войти</Link></p>
      </div>
    </form>
  )
}

export default SinUp