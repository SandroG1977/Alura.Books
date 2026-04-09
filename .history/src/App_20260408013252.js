import './App.css';
import Logo from './components/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index}><Logo /></tr>
        ))}
      </header>
    </div>
  );
}

export default App;
