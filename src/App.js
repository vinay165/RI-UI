import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Schools from './Components/Schools';
import { Provider } from './Context';
import './App.scss';

function App() {
  return (
    <>
      <Provider>
        <Header></Header>
        <Container>
          <Schools></Schools>
        </Container>
      </Provider>
    </>
  );
}

export default App;
