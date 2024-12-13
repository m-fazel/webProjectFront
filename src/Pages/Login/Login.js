import "./Login.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setToken } from '../../api'; // Import the setToken function
import { apiRequest } from '../../api'; // Import the apiRequest function

function Login({ setIsLoggedIn, setUserType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | ورود"
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Prepare the login data
    const loginData = {
      email,
      password,
    };

    // Use the apiRequest function to handle the login API call
    const response = await apiRequest('/login', 'POST', false, loginData);

    if (response && response.token) {
      // If login is successful and a token is returned, save the token
      setToken(response.token);
      setIsLoggedIn(true); // Set the login state to true
      setUserType(true); // Set the login state to true
    } else {
      // If the login fails, show an alert or handle errors
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <div class="d-flex min-vh-100 justify-content-center align-items-center">
        <div class="w-100 px-4">
          <div class="card mx-auto" id="login-card">
            <div class="card-header">
              <b>ورود</b>
            </div>
            <div class="card-body">
              <form onSubmit={handleLogin}>
                <div class="mb-3">
                  <label for="email" class="form-label">ایمیل</label>
                  <input type="text" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">رمز ورود</label>
                  <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="mb-3">
                  <input type="submit" value="ورود" class="btn btn-primary" />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <Link to="/signup">حساب کاربری ندارید؟ هم اکنون ثبت نام کنید</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
