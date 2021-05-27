import React, {useState} from "react";


function CircleMap({ data }) {

    const [submitState, setSubmitState] = useState({

        circleID: 0,
        users: []
    
      });

   
    return (
        <>
        <button className="card text-dark bg-info mb-3 rounded-circle mt-3" style={{ maxWidth: '20rem', justifyContent: "center" }}
        onClick={(e) => {
            setSubmitState({
              ...submitState, circleID: parseInt(e.target.value)
            });
            window.location.href = './circlepage'
          }}>
          <div className="card-body">
            <div className="card-body">
                <p className="card-text"  style={{ textAlign: 'center' }} >{data.name} </p>
            </div>
          </div>
        </button>
        </>
    );

}

export default CircleMap;