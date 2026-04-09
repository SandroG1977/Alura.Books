import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #031e55, #57559b);


li{
    list-style: none;
}
`;

const UltimosLanzamientos = styled.section`
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <UltimosLanzamientos>   </UltimosLanzamientos>
    </AppContainer>
  );
}

export default App;
