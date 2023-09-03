import React from 'react'
import PersonalInfo from './PersonalInfo'
import MyTrips from './MyTrips'
import Settings from './Settings'

const TabContent = ( { visiableTab, currentEmail, setCurrentEmail } ) => {
    return (
        <div>
            {visiableTab == 'PersonalInfo' ? 
                <PersonalInfo 
                    currentEmail={currentEmail}
                    setCurrentEmail={setCurrentEmail}
                /> : null}
            {visiableTab == 'MyTrips' ? <MyTrips /> : null}
            {visiableTab == 'Settings' ? <Settings /> : null} 
        </div>
    )
}

export default TabContent