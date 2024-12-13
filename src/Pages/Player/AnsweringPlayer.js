import React, { useState } from 'react';
import NavbarPlayer from '../../Components/NavbarPlayer';
import { useParams } from "react-router-dom";

function AnsweringPlayer({type}) {
    const [selectedOption, setSelectedOption] = useState('');
    const { categoryId } = useParams();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, such as saving the answer or sending it to a backend
        console.log('Selected option:', selectedOption);
    };

    return (
        <div>
            <NavbarPlayer /> {/* Using the existing NavbarPlayer component */}

            <div class="container pt-4">
                <div class="row g-4">
                    <div class="col-12 col-md-4">
                        <img src="/img/question.jpg" alt="question" class="w-100 rounded-4 shadow" />
                    </div>
                    <div class="col-12 col-md-8 align-self-center">
                        <form onSubmit={handleSubmit}>
                            <div class="row g-4">
                                <div class="col-12">
                                    <h4>سوالی از طراح دیگر؟</h4>
                                </div>
                                <div class="col-12">
                                    <div class="row g-4 row-cols-1">
                                        <div class="col">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="first-option"
                                                    value="first"
                                                    checked={selectedOption === 'first'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label class="form-check-label" htmlFor="first-option">
                                                    گزینه اول
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="second-option"
                                                    value="second"
                                                    checked={selectedOption === 'second'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label class="form-check-label" htmlFor="second-option">
                                                    گزینه دوم
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="third-option"
                                                    value="third"
                                                    checked={selectedOption === 'third'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label class="form-check-label" htmlFor="third-option">
                                                    گزینه سوم
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="fourth-option"
                                                    value="fourth"
                                                    checked={selectedOption === 'fourth'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label class="form-check-label" htmlFor="fourth-option">
                                                    گزینه چهارم
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">
                                        ارسال
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnsweringPlayer;
