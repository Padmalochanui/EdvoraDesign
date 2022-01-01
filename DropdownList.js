import React from 'react'
import Dropdown from './Dropdown'

function DropdownList() {
    return (
        <div className='Dropdown'>
            <h2>Filters</h2>
            <hr/>
            <div>
                <Dropdown />
            </div>
            <div>
                <Dropdown />
            </div>
            <div>
                <Dropdown />
            </div>
        </div>
    )
}

export default DropdownList
