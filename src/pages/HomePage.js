import React from 'react'
import Advertising from '../components/Advertising'
import Content from '../components/Content'

const HomePage = ( { isSearch } ) => {
    return (
        <div>
           {isSearch ? <Content/> : <Advertising/>}
        </div>
    )
}

export default HomePage