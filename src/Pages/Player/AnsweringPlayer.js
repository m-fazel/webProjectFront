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
        console.log('Selected option:', selectedOption);
    };

    return (
        <div>
            <NavbarPlayer /> {/* Using the existing NavbarPlayer component */}

            <div className="container pt-4">
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <img src="/img/question.jpg" alt="question" className="w-100 rounded-4 shadow" />
                    </div>
                    <div className="col-12 col-md-8 align-self-center">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-12">
                                    <h4>سوالی از طراح دیگر؟</h4>
                                </div>
                                <div className="col-12">
                                    <div className="row g-4 row-cols-1">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="first-option"
                                                    value="first"
                                                    checked={selectedOption === 'first'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="first-option">
                                                    گزینه اول
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="second-option"
                                                    value="second"
                                                    checked={selectedOption === 'second'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="second-option">
                                                    گزینه دوم
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="third-option"
                                                    value="third"
                                                    checked={selectedOption === 'third'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="third-option">
                                                    گزینه سوم
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    id="fourth-option"
                                                    value="fourth"
                                                    checked={selectedOption === 'fourth'}
                                                    onChange={handleOptionChange}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="fourth-option">
                                                    گزینه چهارم
                                                </label>
                                            </div>
                                        </div>
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
            </div>
        </div>
    );
}

export default AnsweringPlayer;
