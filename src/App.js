import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Table from './Components/Table';
import './App.scss';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Table></Table>
      </Container>
    </>
  );
}

export default App;
