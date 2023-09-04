import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Register from './register';
import Success from './reg-success';
import RegisteredDogs from './reg-dogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reg-success' element={<Success/>} />
        <Route path='/reg-dogs' element={<RegisteredDogs/>} />
      </Routes>
    </Router>
  );
}

export default App;
