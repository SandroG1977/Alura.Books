import './App.css';
import IconesHeader from './components/IconosHeader';
import Logo from './components/logo';
import OptionsHeader from './components/OptionsHeader';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionsHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;
