import React, { useState, useEffect } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner';
import { Link } from 'react-router-dom';
import useApiRequest from '../../Utils/UseApiRequest';

function QuestionDesignerList() {
  useEffect(() => {
    document.title = "سامانه پروژه سوال پیچ | مدیریت سوالات | طراح";
  }, []);

  const apiRequest = useApiRequest();
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await apiRequest('/get_designed_question', 'POST', true);
        if (response.success) {
          setQuestions(response.data.table);
        } else {
          alert(response.message || 'Failed to fetch questions');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <NavbarDesigner />

      <div className="container pt-4">
        <div className="mb-4">
          <Link to="/question-designer-add" className="btn btn-primary">افزودن سوال جدید</Link>
        </div>

        <h4 className="mb-4">سوالات طراحی شده</h4>
        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-1">#</th>
                <th className="col-6">صورت سوال</th>
                <th>تعداد پاسخ های صحیح</th>
                <th>تعداد پاسخ های غلط</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {questions.length > 0 ? (
                questions.map((question, index) => (
                  <tr key={question.id || index}>
                    <td>{question.id}</td>
                    <td>{question.question}</td>
                    <td>{question.correct_answers || 0}</td>
                    <td>{question.incorrect_answers || 0}</td>
                    <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#question-${question.id}-similar`}>
                        انتخاب سوالات مشابه
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    هیچ سوالی موجود نیست
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {questions.map((question) => (
        <div key={question.id} className="modal fade" id={`question-${question.id}-similar`} tabIndex="-1" aria-labelledby={`question-${question.id}-similar`} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <form action="" method="post">
                <div className="modal-header">
                  <h5 className="modal-title">افزودن سوالات مشابه</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <b>{question.question}</b>

                  {questions.filter(q => q.id !== question.id).map((similarQuestion) => (
                    <div key={similarQuestion.id} className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id={`question-${question.id}-${similarQuestion.id}`} />
                      <label className="form-check-label" htmlFor={`question-${question.id}-${similarQuestion.id}`}>
                        {similarQuestion.question}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">خروج</button>
                  <button type="submit" className="btn btn-primary">ذخیره</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionDesignerList;
