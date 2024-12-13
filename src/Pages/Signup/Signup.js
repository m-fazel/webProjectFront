import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setToken } from '../../api'; // Import the setToken function
import { apiRequest } from '../../api'; // Import the apiRequest function

function Signup({ setIsLoggedIn, setUserType }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [userType, setUserTypeSelect] = useState(1);

    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | ثبت نام"
    }, []);

    const handleSignup = async (e) => {
        e.preventDefault();

        // Validate that passwords match
        if (password !== passwordConfirm) {
            alert('Passwords do not match');
            return;
        }

        // Prepare the signup data
        const signupData = {
            firstname,
            lastname,
            email,
            username,
            password,
            userType,
        };

        // Use the apiRequest function to handle the signup API call
        const response = await apiRequest('/signup', 'POST', false, signupData);

        if (response && response.token) {
            // If signup is successful and a token is returned, save the token and login the user
            setToken(response.token);
            setIsLoggedIn(true); // Set login state to true
            setUserType(userType); // Set user type
        } else {
            // If signup fails, show an alert or handle errors
            alert('Signup failed. Please check your details and try again.');
        }
    };

    return (
        <div className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="w-100 px-4">
                <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                    <div className="card-header">
                        <b>ثبت نام</b>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSignup}>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">نام</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">نام خانوادگی</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">ایمیل</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">نام کاربری</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">رمز ورود</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password_confirm" className="form-label">تکرار رمز ورود</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password_confirm"
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">نوع فعالیت</label>
                                <select
                                    name="type"
                                    id="type"
                                    className="form-select"
                                    value={userType}
                                    onChange={(e) => setUserTypeSelect(e.target.value)}
                                >
                                    <option value="1">بازیکن</option>
                                    <option value="2">طراح سوال</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input type="submit" value="ثبت نام" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <Link to="/">قبلا ثیت نام کرده اید؟ به حساب خود وارد شوید</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
