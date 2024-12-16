import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useApiRequest from '../../Utils/UseApiRequest';

function Signup() {
    const apiRequest = useApiRequest();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [type, setTypeSelect] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | ثبت نام"
    }, []);

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            alert('Passwords do not match');
            return;
        }

        const signupData = {
            firstname,
            lastname,
            email,
            password,
            type,
        };

        const response = await apiRequest('/signup', 'POST', false, signupData);

        if (response.success) {
            alert("ثبت نام شما با موفقیت انجام شد، اکنون میتوانید وارد شوید");
            navigate("/");
        } else {
            alert(response.error.message);
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
                                    autoComplete="email"
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
                                    autoComplete="new-password"
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
                                    autoComplete="new-password"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">نوع فعالیت</label>
                                <select
                                    name="type"
                                    id="type"
                                    className="form-select"
                                    value={type}
                                    onChange={(e) => setTypeSelect(parseInt(e.target.value))}
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
                    <div className="card-footer">
                        <Link to="/">قبلا ثیت نام کرده اید؟ به حساب خود وارد شوید</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
