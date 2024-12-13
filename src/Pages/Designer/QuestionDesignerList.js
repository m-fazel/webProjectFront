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
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedSimilarQuestions, setSelectedSimilarQuestions] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await apiRequest('/get_designed_question', 'POST', true);
      if (response.success) {
        setQuestions(response.data.table);
      } else {
        alert(response.error.message);
      }
    };

    const fetchAllQuestions = async () => {
      const response = await apiRequest('/get_all_question', 'POST', true);
      if (response.success) {
        setAllQuestions(response.data.table);
      } else {
        alert(response.error.message);
      }
    };

    fetchAllQuestions();
    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchSimilarQuestions = async () => {
      for (let question of questions) {
        const response = await apiRequest('/get_similar_question', 'POST', true, {
          question_id: question.id,
        });

        if (response.success) {
          setSelectedSimilarQuestions((prevState) => ({
            ...prevState,
            [question.id]: response.data.table || [],
          }));
        } else {
          alert(response.error.message);
        }
      }
    };

    if (questions.length > 0) {
      fetchSimilarQuestions();
    }
  }, [questions]);

  const handleSimilarQuestionChange = (questionId, similarQuestionId, isChecked) => {
    setSelectedSimilarQuestions((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (isChecked) {
        if (!updatedSelected[questionId]) {
          updatedSelected[questionId] = [];
        }
        updatedSelected[questionId].push(similarQuestionId);
      } else {
        updatedSelected[questionId] = updatedSelected[questionId].filter(id => id !== similarQuestionId);
      }
      return updatedSelected;
    });
  };

  const handleSubmitSimilarQuestions = async (questionId) => {
    const similarQuestionIds = selectedSimilarQuestions[questionId] || [];

    const response = await apiRequest('/set_similar_question', 'POST', true, {
      question_id: questionId,
      similar_question_ids: similarQuestionIds,
    });

    if (response.success) {
      alert("سوالات مشابه با موفقیت ذخیره شدند");
      // alert('question-' + questionId + '-similar');
      window.bootstrap.Modal.getInstance(document.getElementById(`question-${questionId}-similar`)).hide();
    } else {
      alert(response.error.message);
    }
  };

  return (
    <div>
      <NavbarDesigner />

      <div className="container pt-4">
        <div className="mb-4">
          <Link to="/question-designer-add" className="btn btn-primary">افزودن سوال جدید</Link>
        </div>

        <h4 className="mb-4">سوالات طراحی شده</h4>
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
                  <td>{question.correctCount || 0}</td>
                  <td>{question.notCorrectCount || 0}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={`#question-${question.id}-similar`}
                    >
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
      </div>

      {questions.map((question) => (
        <div key={question.id} className="modal fade" id={`question-${question.id}-similar`} tabIndex="-1" aria-labelledby={`question-${question.id}-similar`} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitSimilarQuestions(question.id);
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">افزودن سوالات مشابه</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <b>{question.question}</b>

                  {allQuestions.filter(q => q.id !== question.id).map((similarQuestion) => (
                    <div key={similarQuestion.id} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`question-${question.id}-${similarQuestion.id}`}
                        checked={selectedSimilarQuestions[question.id]?.includes(similarQuestion.id) || false}
                        onChange={(e) => handleSimilarQuestionChange(question.id, similarQuestion.id, e.target.checked)}
                      />
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
