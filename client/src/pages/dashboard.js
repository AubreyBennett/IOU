import React from 'react';

function Dashboard() {
  return (
    <div className="container">
      <div className="card text-dark bg-info mb-3" style={{maxWidth: '18rem'}}>
        <div className="card-header">Dashboard</div>
        {/* <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> */}
      </div>
      <button type="button" className="btn btn-info">Info</button>
      <div className="card text-dark bg-info mb-3" style={{maxWidth: '18rem'}}>
        <div className="card-header">Header - make this a link?</div>
        <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-dark bg-info mb-3" style={{maxWidth: '18rem'}}>
        <div className="card-header">Transactions</div>
        {/* <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;