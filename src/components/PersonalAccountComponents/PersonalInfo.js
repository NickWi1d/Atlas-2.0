import React from 'react'
import s from '../../pages/PersonalAccount.module.css'
import '../../index.css'

const PersonalInfo = ( {currentEmail,  setCurrentEmail } ) => {
    return (
        <div className={s.tabcontent}>
            <h1>Личная информация</h1>
            <form action='action_page.php'>
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
                />
                <label htmlFor='lname' className='personalInfoLabel'>Фамилия</label>
                <input
                    type='text'
                    id='lname'
                    className='personalInfo'
                    placeholder="Ваша фамилия.."
                />
                <label htmlFor='PhoneNumber' className='personalInfoLabel'>Номер телефона</label>
                <input
                    type='text'
                    id='PhoneNumber'
                    className='personalInfo'
                    placeholder="Ваш номер телефона.."
                />

                <input type="submit" value="Сохранить"/>
            </form>
        </div>
    )
}

export default PersonalInfo