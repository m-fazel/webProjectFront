import "./Login.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setToken } from '../../Utils/AuthContext';
import useApiRequest from '../../Utils/UseApiRequest';
import { useAuth } from '../../Utils/AuthContext';

function Login() {
  const apiRequest = useApiRequest();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn, setUserType } = useAuth();

  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | ورود"
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    const response = await apiRequest('/login', 'POST', false, loginData);

    if (response.success && response.data.token) {
      setToken(response.data.token);
      setIsLoggedIn(true);
      setUserType(response.data.type);
    } else {
      alert(response.error.message);
    }
  };

  return (
    <div>
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        <div className="w-100 px-4">
          <div className="card mx-auto" id="login-card">
            <div className="card-header">
              <b>ورود</b>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">ایمیل</label>
                  <input type="text" className="form-control" id="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">رمز ورود</label>
                  <input type="password" className="form-control" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="submit" value="ورود" className="btn btn-primary" />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <Link to="/signup">حساب کاربری ندارید؟ هم اکنون ثبت نام کنید</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
