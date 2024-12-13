import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

import DashboardDesigner from './Pages/Designer/DashboardDesigner';
import QuestionDesignerList from './Pages/Designer/QuestionDesignerList'; // Import the new component
import CategoryDesignerList from './Pages/Designer/CategoryDesignerList'; // Import the new component
import CategoryDesignerAdd from './Pages/Designer/CategoryDesignerAdd';
import QuestionDesignerAdd from './Pages/Designer/QuestionDesignerAdd';

import DashboardPlayer from './Pages/Player/DashboardPlayer';
import QuestionPlayerList from './Pages/Player/QuestionPlayerList';
import ScorePlayer from './Pages/Player/ScorePlayer';
import AnsweringPlayer from './Pages/Player/AnsweringPlayer';
import DesignerView from './Pages/Player/DesignerView';
import PlayerView from './Pages/Player/PlayerView';

import { validateToken } from './api'; // Import the validateToken function

import "bootstrap/dist/css/bootstrap.rtl.min.css";
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');


function App() {
  useEffect(() => {
    const checkToken = async () => {
      const validToken = await validateToken();
      if (validToken) {
        setIsLoggedIn(true);
        setUserType(validToken[1]); // Assuming validToken returns [true, userType]
      } else {
        setIsLoggedIn(false);
        setUserType(0); // Reset user type if token is invalid
      }
    };

    // checkToken(); // Check token validity when the app loads
  }, []); // Empty dependency array ensures this runs only on mount

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userType, setUserType] = useState(2);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    setUserType(0);
  };

  const Logout = () => {
    handleLogout();
    return <Navigate to="/" replace />;
  };

  return (
    <div>
      <Routes>
        <Route path="/signup" element={
          isLoggedIn ? (
            userType === 2 ? <Navigate to="/dashboard-designer" replace /> : <Navigate to="/dashboard-player" replace />
          ) : (
            <Signup setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />
          )
        } />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              userType === 2 ? <Navigate to="/dashboard-designer" replace /> : <Navigate to="/dashboard-player" replace />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />
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
              <AnsweringPlayer type="{random}"/>
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
    </div>
  );
}

export default App;
