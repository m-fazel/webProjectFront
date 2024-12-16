import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

import DashboardDesigner from './Pages/Designer/DashboardDesigner';
import QuestionDesignerList from './Pages/Designer/QuestionDesignerList';
import CategoryDesignerList from './Pages/Designer/CategoryDesignerList';
import CategoryDesignerAdd from './Pages/Designer/CategoryDesignerAdd';
import QuestionDesignerAdd from './Pages/Designer/QuestionDesignerAdd';

import DashboardPlayer from './Pages/Player/DashboardPlayer';
import QuestionPlayerList from './Pages/Player/QuestionPlayerList';
import ScorePlayer from './Pages/Player/ScorePlayer';
import AnsweringPlayer from './Pages/Player/AnsweringPlayer';
import DesignerView from './Pages/Player/DesignerView';
import PlayerView from './Pages/Player/PlayerView';

import { useAuth } from './Utils/AuthContext';

import "bootstrap/dist/css/bootstrap.rtl.min.css";
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

function App() {
  const { isLoggedIn, userType, setIsLoggedIn, setUserType } = useAuth();

  const Logout = () => {
    useEffect(() => {
      localStorage.removeItem('userToken');
      setIsLoggedIn(false);
      setUserType(0);
    }, []);
  
    return <Navigate to="/" replace />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            userType === 2 ? <Navigate to="/dashboard-designer" replace /> : <Navigate to="/dashboard-player" replace />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/signup"
        element={
          isLoggedIn ? (
            userType === 2 ? <Navigate to="/dashboard-designer" replace /> : <Navigate to="/dashboard-player" replace />
          ) : (
            <Signup />
          )
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/dashboard-designer"
        element={isLoggedIn && userType == 2 ? <DashboardDesigner /> : <Navigate to="/" replace />}
      />
      <Route
        path="/question-designer-list"
        element={<QuestionDesignerList />}
      />
      <Route
        path="/question-designer-add"
        element={<QuestionDesignerAdd />}
      />
      <Route
        path="/category-designer-list"
        element={<CategoryDesignerList />}
      />
      <Route
        path="/category-designer-add"
        element={<CategoryDesignerAdd />}
      />
      <Route
        path="/dashboard-player"
        element={isLoggedIn && userType == 1 ? <DashboardPlayer /> : <Navigate to="/" replace />}
      />
      <Route
        path="/question-player-list"
        element={<QuestionPlayerList />}
      />
      <Route
        path="/score-player"
        element={<ScorePlayer />}
      />
      <Route
        path="/answering-player/category/:categoryId"
        element={<AnsweringPlayer type="category" />}
      />
      <Route
        path="/answering-player/random"
        element={<AnsweringPlayer type="random" />}
      />
      <Route
        path="/designer-view/:designerId"
        element={<DesignerView />}
      />
      <Route
        path="/player-view/:playerId"
        element={<PlayerView />}
      />
    </Routes>
  );
}

export default App;
