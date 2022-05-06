import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" 
          element={
            <Login/>
          }
        />
        <Route path="/dashboard" 
          element={
            <Dashboard/>
          }
        />  
      </Routes>
    </div>
  );
}

export default App;
