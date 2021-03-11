import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Schools from './Components/Schools';
import './App.scss';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Schools></Schools>
      </Container>
    </>
  );
}

export default App;
