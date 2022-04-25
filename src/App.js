import './App.css';
import FunctionComponent from './components/classComponent';



function App(props) {
  return (
    <div className="App">
      <FunctionComponent name={props.name} />
    </div>
  );
}

export default App;
