import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { logInUser } from '../../firebase';
import { startSession } from '../../session';
import { useState } from 'react';


const Login = ({setIsHaveAccount, setIsCurrentUser}) => {
    let WindowHigh = document.documentElement.clientHeight - 200

    const [error, setError] = useState('');
    const [emailLogIn, setEmailLogIn] = useState('')
    const [passwordLogIn, setPasswordLogIn] = useState('')

    const onSubmit = async (event) => {
      event.preventDefault();
      setError("");
      try{
        let loginResponse = await logInUser(emailLogIn, passwordLogIn);
        startSession(loginResponse.user);//запоминаем текущего пользователя
        setIsCurrentUser(true)
      } catch (error) {
        console.error(error.message)
        setError(error.message)
      }
      console.log("Logging in...")
    }

  return (
    <form onSubmit={onSubmit}  className={'LoginForm'} style={{height: `${WindowHigh}px`}}>
      <h1>Войти</h1>
      <p>Пожалуйста заполните эту форму, что бы войти в учетётную запись</p>
      {error && <>{error}</>}
      <label htmlFor="email"><b>Email</b></label>
      <input type="email" name="email" className='emailInput' placeholder="Введите email" value={emailLogIn} onChange={(e) => setEmailLogIn(e.target.value)} required/>

      <label htmlFor="password"><b>Пароль</b></label>
      <input type="password" name="password" className='passwordInput' placeholder="Введите пароль" value={passwordLogIn} onChange={(e) => setPasswordLogIn(e.target.value)} required/>

      <button type="submit" className='LoginBtn'>Войти</button>
      <div>
        <p>Нет аккаунта? <Link to='/NavBarPA' onClick={()=>setIsHaveAccount(false)}>Зарегистрироваться</Link></p>
      </div>
    </form>
  )
}

export default Login