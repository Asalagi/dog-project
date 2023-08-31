import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}>Home</Route>
      </Routes>
    </Router>
  );
}

export default App;
