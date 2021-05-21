import React from "react";


function InviteCard({data}) {

    return (
        <>
            <div className="card-body">
                <p className="card-text">{data.description} {data.value} {data.date}</p>
            </div>

        </>
    );

}

export default InviteCard;