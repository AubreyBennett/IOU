import React from "react";


function InviteCard({data, handleCheckbox}) {



    return (
        <>
            <div className="card-body">
                <p className="card-text">{data.first_name} {data.last_name}</p>
               <div className = "form-check">
                   <input className = "form-check-input" type="checkbox" value={data.id} id="flexCheckDefault" onClick={(e)=>{handleCheckbox(e)}}/>
               </div>
                
            </div>

        </>
    );

}

export default InviteCard;