import React from 'react'

function Dropdown() {
    return (
        <div>
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">Products
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-header">Dropdown header 1</li>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li className="divider"></li>
                        <li className="dropdown-header">Dropdown header 2</li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
