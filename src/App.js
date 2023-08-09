import './App.css';
import Title from './Components/Title';
import Navigation from './Components/Navigation';
import Form from './Components/Form';
import Show from './Components/Show';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Title/>
        <Navigation/>
        <hr/>
      </div>
      <Form/>
      <Show/>
    </div>
  );
}

export default App;
