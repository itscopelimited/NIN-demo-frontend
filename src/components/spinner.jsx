import React from 'react'

function Spinner() {
    return (
        <>
            <div className="spinner-border text-success" role="status" style={{textAlign:'center'}}>
                <span className="visually-hidden">Loading...</span>
            </div> 
        </>
    )
}

export default Spinner
