import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import ChatWindow from './components/ChatWindow';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/child/:childId" element={<ChatWindow />} />
      </Routes>
    </Router>
  );
};

export default App;
