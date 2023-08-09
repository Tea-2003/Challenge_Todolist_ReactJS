import logo from './logo.svg';
import './App.css';
import Boxinput_Component from './Components/Boxinput_Component';
import NavActive_Component from './Components/Header_Component';
import Index from './Components/NavActive_Component/Index';
function App() {
  return (

      <div className="container">
        <div className="header">
          <Boxinput_Component/>
          <div className="navigation">
            <NavActive_Component/>
            <Index/>
            <Index/>
          </div>
          <hr />
        </div>
        <div className="form">
          <input type="text" id="month-input" className="form-control" placeholder="add details" />
          <button className="btn">Add</button>
        </div>
        {/* <div className="show">
          <div className="show-text">
            <div className="tick" />
            <div className="text">Do coding challenges</div>
          </div>
        </div> */}
      </div>
    );
  }


export default App;
