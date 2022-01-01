import React from 'react'
import App from './App'
function Products() {
    return (
        <>  
            <div className='edvora'>
                <h4>Product Name</h4>
                <hr />
                <div className='box'>
                    <div>
                        <div >
                            <div className="row">
                                <div className="col">
                                    <App />
                                </div>
                                <div className="col">
                                    <App />
                                </div>
                                <div className="col">
                                    <App />
                                </div>
                                <div className="col">
                                    <App />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
