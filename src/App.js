
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

<div class="card-body">
            <h5 className="card-title">Free</h5>
            <h6 className="card-price ">$0<span className="period">/month</span></h6>
            <br className='break'></br>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>


    </div>
  )
}

export default App;
