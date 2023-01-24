
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='price'>
      <div className='Nav'>
        {/* Result
        <br></br>
        html
        <br></br> */}
        </div>

     <div className='title'>
      
     
     <Card/>
     <Card/>
     <Card/>
     </div>  
     </div>
    </div>
  );
}

function Card() {
  return(
    <div className='card'>

<div className="card-body">
            <h5 className="card-title">Free</h5>
            <h6 className="card-price ">$0<span className="period">/month</span></h6>
            <br className='break'></br>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <div className="btn btn-primary text-uppercase">Button</div>
          </div>
          </div>


    </div>
  )
}

export default App;
