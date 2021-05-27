import React from 'react';


function Header({ header }) {
    return (
        <>
            <div className="card bg-info" style={{ textAlign: "center", backgroundColor: "blue", marginBottom: "50px" , padding: "50px" }}>
                <h1>{header}</h1>
            </div>
        </>
    )
}

export default Header;