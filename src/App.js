import './App.css';
import Boxinput_Component from './Components/Boxinput_Component';
import NavActive_Component from './Components/NavActive_Component';
import NavAll_Component from './Components/NavAll_Component';
import NavComplete_Component from './Components/NavComplete_Component';
function App() {
  return (

    <div className="container">
      <div className="header">
        <div className="todo">
          #todo
        </div>

        <div className="navigation">
          <NavAll_Component />
          <NavActive_Component />
          <NavComplete_Component />
        </div>
        <hr />
      </div>
      <Boxinput_Component />
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
