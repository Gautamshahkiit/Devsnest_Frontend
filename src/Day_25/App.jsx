import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Slides from './components/Slides'

import Button from 'react-bootstrap/Button';
import Cards from './components/Cards'

function App() {
  return (
    <>
     <Navigation />
    <div className="App">
     <Slides />
     <div className="btns">
     <Button classNmae="btn" variant="primary">Buy</Button>
     <Button classNmae="btn" variant="success">Sell</Button>
     <Cards/>
     </div>
    </div>
    </>
  );
}

export default App;
