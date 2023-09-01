import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Register from './register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}>Home</Route>
        <Route path='/register' element={<Register/>}>Register</Route>
      </Routes>
    </Router>
  );
}

export default App;
