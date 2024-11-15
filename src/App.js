import {Routes, Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Uncrewed from './pages/Uncrewed';
import Payloads from './pages/Payloads';
import Energy from './pages/Energy';
import Careers from './pages/Careers';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/unscrewed' element={<Uncrewed/>}></Route>
            <Route path='/payloads' element={<Payloads/>}></Route>
            <Route path='/energy' element={<Energy/>}></Route>
            <Route path='/careers' element={<Careers/>}></Route>
        </Routes>





      {/* <Home />
      <Uncrewed />
      
      <Payloads />
      <Energy />
      <Careers /> */}
    </div>
  );
}

export default App;
