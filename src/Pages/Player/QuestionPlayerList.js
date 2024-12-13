import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarPlayer from '../../Components/NavbarPlayer';
import useApiRequest from '../../Utils/UseApiRequest'; // Assuming useApiRequest is defined for API calls

function QuestionPlayerList() {
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | مدیریت سوالات | بازیکن";
    }, []);

    const apiRequest = useApiRequest();
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('1');
    const navigate = useNavigate();

    // Fetch answered questions
    useEffect(() => {
        const fetchAnsweredQuestions = async () => {
            const response = await apiRequest('/answered_question', 'POST', true);
            if (response.success) {
                setAnsweredQuestions(response.data.table); // Assuming response.data contains the list of answered questions
            }else{
                alert(response.error.message); // Handle errors
            }
        };

        const fetchCategories = async () => {
            const response = await apiRequest('/get_categories', 'POST', true);
            if (response.success) {
                setCategories(response.data.table); // Assuming response.data.categories contains the list of categories
            }else{
                alert(response.error.message); // Handle errors
            }
        };

        fetchCategories();
        fetchAnsweredQuestions();
    }, []);

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
                        {answeredQuestions.length > 0 ? (
                            answeredQuestions.map((question, index) => (
                                <tr key={question.id} className={question.correct ? "table-success" : "table-danger"}>
                                    <td>{index + 1}</td>
                                    <td>{question.question}</td>
                                    <td>
                                        <Link className="link-underline link-underline-opacity-0" to={`/designer-view/${question.designer.id}`}>
                                            {question.designer.name}
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">هیچ سوالی پاسخ داده نشده است</td>
                            </tr>
                        )}
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
                                                {categories.length > 0 ? (
                                                    categories.map((cat) => (
                                                        <option key={cat.id} value={cat.id}>
                                                            {cat.name}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option value="1">دسته بندی ای وجود ندارد</option>
                                                )}
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
