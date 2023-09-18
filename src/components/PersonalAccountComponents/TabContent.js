import React from 'react'
import PersonalInfo from './PersonalInfo'
import MyTrips from './MyTrips'
import Settings from './Settings'

const TabContent = ( { visiableTab, currentEmail, setCurrentEmail, currentUserFirstName, currentUserLastName, currentUserPhoneNumber, setCurrentUserFirstName, setCurrentUserLastName, setCurrentUserPhoneNumber, getInfoAboutUser } ) => {
    return (
        <div>
            {visiableTab == 'PersonalInfo' ? 
                <PersonalInfo 
                    currentEmail={currentEmail}
                    setCurrentEmail={setCurrentEmail}

                    currentUserFirstName={currentUserFirstName}
                    currentUserLastName={currentUserLastName}
                    currentUserPhoneNumber={currentUserPhoneNumber}

                    setCurrentUserFirstName={setCurrentUserFirstName}
                    setCurrentUserLastName={setCurrentUserLastName}
                    setCurrentUserPhoneNumber={setCurrentUserPhoneNumber}

                    getInfoAboutUser={getInfoAboutUser}
                /> : null}
            {visiableTab == 'MyTrips' ? <MyTrips /> : null}
            {visiableTab == 'Settings' ? <Settings /> : null} 
        </div>
    )
}

export default TabContent