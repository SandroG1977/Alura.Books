import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';
import UltimosLanzamientos from './components/UltimoLanzamientos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #031e55, #57559b);


li{
    list-style: none;
}
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <UltimosLanzamientos />
    </AppContainer>
  );
}

export default App;
