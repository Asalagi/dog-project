import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Register from './register';
import Success from './reg-success';
import RegisteredDogs from './reg-dogs';
import DogInfo from './dog-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reg-success' element={<Success/>} />
        <Route path='/reg-dogs' element={<RegisteredDogs/>} />
        <Route path='/dogs/:id' element={<DogInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;
