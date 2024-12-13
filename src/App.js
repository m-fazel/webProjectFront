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
      <Route path="/signup" element={
        isLoggedIn ? (
          userType === 2 ? <Navigate to="/dashboard-designer" replace /> : <Navigate to="/dashboard-player" replace />
        ) : (
          <Signup />
        )
      } />
      <Route path="/logout" element={<Logout />} />
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
        path="/dashboard-designer"
        element={
          isLoggedIn && userType === 2 ? (
            <DashboardDesigner />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/question-designer-list"
        element={
          isLoggedIn && userType === 2 ? (
            <QuestionDesignerList />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/question-designer-add"
        element={
          isLoggedIn && userType === 2 ? (
            <QuestionDesignerAdd />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/category-designer-list"
        element={
          isLoggedIn && userType === 2 ? (
            <CategoryDesignerList />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/category-designer-add"
        element={
          isLoggedIn && userType === 2 ? (
            <CategoryDesignerAdd />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/dashboard-player"
        element={
          isLoggedIn && userType === 1 ? (
            <DashboardPlayer />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/question-player-list"
        element={
          isLoggedIn && userType === 1 ? (
            <QuestionPlayerList />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/score-player"
        element={
          isLoggedIn && userType === 1 ? (
            <ScorePlayer />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/answering-player/category/:categoryId"
        element={
          isLoggedIn && userType === 1 ? (
            <AnsweringPlayer type="{category}" />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/answering-player/random"
        element={
          isLoggedIn && userType === 1 ? (
            <AnsweringPlayer type="{random}" />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/designer-view/:designerId"
        element={
          isLoggedIn && userType === 1 ? (
            <DesignerView />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/player-view/:playerId"
        element={
          isLoggedIn && userType === 1 ? (
            <PlayerView />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
