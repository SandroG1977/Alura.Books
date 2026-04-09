import './App.css';
import IconesHeader from './components/IconosHeader';
import OptionsHeader from './components/OptionsHeader';
import Logo from './components/logo';



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
