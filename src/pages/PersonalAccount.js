import React, { useState, useEffect } from 'react'
import s from './PersonalAccount.module.css'
import { endSession, isLoggedIn, getSession } from '../session'
import { Link } from 'react-router-dom'
import TabContent from '../components/PersonalAccountComponents/TabContent'

const PersonalAccount = ( { setIsCurrentUser, currentEmail, setCurrentEmail } ) => {
    const [visiableTab, setVisiableTab] = useState('PersonalInfo')

    useEffect(() => {
        if (!isLoggedIn()) {
            setIsCurrentUser(false)
        }
        let session = getSession();
        setCurrentEmail(session.email);
        console.log("Your access token is: " + session.accessToken);
      }, [isLoggedIn]);

    const onLogout = () => {
        endSession();
        setIsCurrentUser(false)
    }

    return (      
            <div className={s.TabMenu}>
                <div className={s.TabMenuBox}>
                    <div className={s.returnToSearchWrap}>
                        <Link to={'/'}
                            className={s.returnToSearch}
                        >
                                <svg class={s.MuiSvgIcon} focusable="false" viewBox="0 0 25 13" aria-hidden="true"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>
                                <b>Назад в поиск</b>
                        </Link>
                    </div>
                    <div className={s.tabs}>
                        <div className={`${s.tablink} ${visiableTab === 'PersonalInfo' ? s.activeTab : ''}`} onClick={() => setVisiableTab('PersonalInfo')}>Личная информация</div>
                        <hr className={s.devider}/>
                        <div className={`${s.tablink} ${visiableTab === 'MyTrips' ? s.activeTab : ''}`} onClick={() => setVisiableTab('MyTrips')}>Мои поездки</div>
                        <hr className={s.devider}/>
                        <div className={`${s.tablink} ${visiableTab === 'Settings' ? s.activeTab : ''}`} onClick={() => setVisiableTab('Settings')}>Настройки</div>
                        <hr className={s.devider}/>
                        <div className={s.tablink} onClick={()=>onLogout()}>Выйти</div>
                    </div>
                </div>
                <div className={s.content}>
                    <TabContent
                        visiableTab={visiableTab}

                        currentEmail={currentEmail}
                        setCurrentEmail={setCurrentEmail}
                    />
                </div>
            </div>
    )
}

export default PersonalAccount