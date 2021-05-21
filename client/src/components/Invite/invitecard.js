import React from "react";


function InviteCard({data}) {

    return (
        <>
            <div className="card-body">
                <p className="card-text">{data.user}</p>
            </div>

        </>
    );

}

export default InviteCard;