import logo from './logo.svg';
import './App.css';
import Resource from './components/resource/resource';

function App() {
  return (
    <div className="App">
      <Resource resourceClassName="resource-megacredit"></Resource>
      <Resource resourceClassName="resource-steel"></Resource>
      <Resource resourceClassName="resource-titanium"></Resource>
      <Resource resourceClassName="resource-plants"></Resource>
      <Resource resourceClassName="resource-energy"></Resource>
      <Resource resourceClassName="resource-heat"></Resource>
    </div>
  );
}

export default App;
