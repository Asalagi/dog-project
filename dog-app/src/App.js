import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Register from './register';
import Success from './reg-success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reg-success' element={<Success/>} />
      </Routes>
    </Router>
  );
}

export default App;
