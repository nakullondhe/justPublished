import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePost from './Pages/CreatePost';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Posts from './Pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
