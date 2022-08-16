
import './App.css';
import { Route, Routes} from 'react-router-dom'
import {List} from './pages/list'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import {Register} from './pages/register'


function App() {
  return (
    <div className="App">
      <header>
        <h1> Q9Pets </h1>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/private" element={<RequireAuth><List /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
