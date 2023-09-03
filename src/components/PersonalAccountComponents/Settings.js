import React from 'react'
import s from '../../pages/PersonalAccount.module.css'

const Settings = () => {
    return (
        <div className={s.vrpDelAcc}>
            <h1>Личная информация</h1>
            <p>Вы можете удалить аккаунт без вожможности восстановления, все данные будут утеряны</p>
            <input
                type="button"
                value={'Удалить аккаунт'}
                className={s.delAcc}
            />
        </div>
    )
}

export default Settings