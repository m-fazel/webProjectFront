import React, { useEffect, useState } from 'react';
import NavbarPlayer from '../../Components/NavbarPlayer';
import { useParams } from "react-router-dom";
import useApiRequest from '../../Utils/UseApiRequest';

function AnsweringPlayer({type}) {
    const [selectedOption, setSelectedOption] = useState();
    const { categoryId } = useParams();
    const [questionData, setQuestionData] = useState(null);
    const apiRequest = useApiRequest();

    useEffect(() => {
        const fetchNewQuestion = async () => {
            const requestData = {
                type: type,
                id: categoryId || undefined,
            };

            const response = await apiRequest('/get_not_answered_question', 'POST', true, requestData);
            if (response.success) {
                setQuestionData(response.data); // Store question data if successful
            } else {
                alert(response.error.message); // Handle errors
            }
        };

        fetchNewQuestion();
    }, [type, categoryId]);


    const handleOptionChange = (event) => {
        setSelectedOption(parseInt(event.target.value));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate if an option is selected
        if (!selectedOption) {
            alert("لطفاً یک گزینه را انتخاب کنید");
            return;
        }

        const response = await apiRequest('/check_question_answer', 'POST', true, {
            question_id: questionData.id,
            option: selectedOption,
        });

        if (response.success) {
            if (response.data.correct) {
                alert("پاسخ صحیح بود!");
            } else {
                alert("پاسخ غلط بود.");
            }

            // Optionally, fetch the next question after answering
            const nextQuestionResponse = await apiRequest('/get_not_answered_question', 'POST', true, {
                type: type,
                id: categoryId || undefined,
            });
            if (nextQuestionResponse.success) {
                setQuestionData(nextQuestionResponse.data);
                setSelectedOption(); // Reset the selected option for the next question
            } else {
                alert(nextQuestionResponse.error.message);
            }
        } else {
            alert(response.error.message); // Show error message if the answer check fails
        }
    };

    return (
        <div>
            <NavbarPlayer /> {/* Using the existing NavbarPlayer component */}

            <div className="container pt-4">
                {questionData ? (
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <img src="/img/question.jpg" alt="question" className="w-100 rounded-4 shadow" />
                        </div>
                        <div className="col-12 col-md-8 align-self-center">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <h4>{questionData.question}</h4> {/* Displaying the fetched question */}
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-4 row-cols-1">
                                            {questionData.options.map((option, index) => (
                                                <div className="col" key={index + 1}>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="option"
                                                            id={`option-${index + 1}`}
                                                            value={index + 1}
                                                            checked={selectedOption === (index + 1)}
                                                            onChange={handleOptionChange}
                                                            required
                                                        />
                                                        <label className="form-check-label" htmlFor={`option-${index + 1}`}>
                                                            {option}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">
                                            ارسال
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">پرسشی یافت نشد</div>
                )}
            </div>
        </div>
    );
}

export default AnsweringPlayer;
