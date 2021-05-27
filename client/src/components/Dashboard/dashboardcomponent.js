import React from "react";


function CircleMap({data}) {

    console.log("--------------------------/////---------------")
    console.log(data)

    return (
        <>
            <div className="card-body">
                <p className="card-text">{data.name} </p>
            </div>

        </>
    );

}

export default CircleMap;