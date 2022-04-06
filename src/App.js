import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './components/pages/auth/Login';
import Dashboard from './components/pages/user/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to ="/login" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
