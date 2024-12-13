import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarPlayer from '../../Components/NavbarPlayer';

function QuestionPlayerList() {
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | مدیریت سوالات | بازیکن";
    }, []);

    const [category, setCategory] = useState('1'); // Default category: programming
    const navigate = useNavigate(); // React Router's useNavigate hook

    const handleSubmit = (event) => {
        event.preventDefault();
        window.bootstrap.Modal.getInstance(document.getElementById('startAnswering')).hide();
        navigate(`/answering-player/category/${category}`);
    };

    const handleRandomAnswering = () => {
        window.bootstrap.Modal.getInstance(document.getElementById('startAnswering')).hide();
        navigate('/answering-player/random');
    };

    return (
        <div>
            <NavbarPlayer />

            <div className="container pt-4">
                <div className="mb-4">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#startAnswering" className="btn btn-primary">
                        شروع پاسخگویی
                    </button>
                </div>

                <h4 className="mb-4">سوالات پاسخ داده شده</h4>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="col-1">#</th>
                            <th className="col-8">صورت سوال</th>
                            <th>طراح</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <td>1</td>
                            <td>html چیست؟</td>
                            <td><Link className="link-underline link-underline-opacity-0" to="/designer-view/3">محمدفاضل سماواتی</Link></td>
                        </tr>
                        <tr className="table-success">
                            <td>2</td>
                            <td>css چیست؟</td>
                            <td><Link className="link-underline link-underline-opacity-0" to="/designer-view/4">امین حسن زاده</Link></td>
                        </tr>
                    </tbody>
                </table>

                <div className="modal fade" id="startAnswering" tabIndex="-1" aria-labelledby="start-answering" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">انتخاب روش پاسخگویی</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4 justify-content-center align-items-center text-center">
                                        <div className="col-auto">
                                            <label htmlFor="type" className="form-label">دسته بندی</label>
                                        </div>
                                        <div className="col-auto">
                                            <select
                                                name="type"
                                                id="type"
                                                className="form-select"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                            >
                                                <option value="1">برنامه نویسی</option>
                                                <option value="2">عمومی</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            <input type="submit" value="شروع" className="btn btn-success col-12" />
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            <button type="button" className="btn btn-primary" onClick={handleRandomAnswering}>
                                                پاسخگویی به صورت تصادفی
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">لغو</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionPlayerList;
