import React, { useEffect, useState } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner'; // Import NavbarDesigner

function QuestionDesignerAdd() {
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | افزودن سوال | طراح"
    }, []);
    
    // State hooks for form inputs
    const [question, setQuestion] = useState('');
    const [firstOption, setFirstOption] = useState('');
    const [secondOption, setSecondOption] = useState('');
    const [thirdOption, setThirdOption] = useState('');
    const [fourthOption, setFourthOption] = useState('');
    const [answer, setAnswer] = useState('');
    const [hard, setHard] = useState('');
    const [category, setCategory] = useState('');


    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to the server or handle it as needed
        console.log({
            question,
            firstOption,
            secondOption,
            thirdOption,
            fourthOption,
            answer,
            hard,
            category,
        });
    };

    return (
        <div>
            <NavbarDesigner /> {/* Include NavbarDesigner */}

            <div class="container pt-4">
                <form onSubmit={handleSubmit}>
                    {/* Question Input */}
                    <div class="mb-3">
                        <label htmlFor="question" class="form-label">صورت سوال</label>
                        <input
                            type="text"
                            class="form-control"
                            id="question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                    </div>

                    {/* Options */}
                    <div class="row">
                        <div class="mb-3 col-12 col-md-3">
                            <label htmlFor="first-option" class="form-label">گزینه اول</label>
                            <input
                                type="text"
                                class="form-control"
                                id="first-option"
                                value={firstOption}
                                onChange={(e) => setFirstOption(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3 col-12 col-md-3">
                            <label htmlFor="second-option" class="form-label">گزینه دوم</label>
                            <input
                                type="text"
                                class="form-control"
                                id="second-option"
                                value={secondOption}
                                onChange={(e) => setSecondOption(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3 col-12 col-md-3">
                            <label htmlFor="third-option" class="form-label">گزینه سوم</label>
                            <input
                                type="text"
                                class="form-control"
                                id="third-option"
                                value={thirdOption}
                                onChange={(e) => setThirdOption(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3 col-12 col-md-3">
                            <label htmlFor="fourth-option" class="form-label">گزینه چهارم</label>
                            <input
                                type="text"
                                class="form-control"
                                id="fourth-option"
                                value={fourthOption}
                                onChange={(e) => setFourthOption(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Answer, Difficulty, Category */}
                    <div class="row">
                        <div class="mb-3 col-12 col-md-4">
                            <label htmlFor="answer" class="form-label">پاسخ</label>
                            <select
                                name="answer"
                                id="answer"
                                class="form-select"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            >
                                <option value="" hidden>گزینه صحیح را انتخاب کنید</option>
                                <option value="1">گزینه اول</option>
                                <option value="2">گزینه دوم</option>
                                <option value="3">گزینه سوم</option>
                                <option value="4">گزینه چهارم</option>
                            </select>
                        </div>
                        <div class="mb-3 col-12 col-md-4">
                            <label htmlFor="hard" class="form-label">درجه سختی</label>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                class="form-control"
                                id="hard"
                                value={hard}
                                onChange={(e) => setHard(e.target.value)}
                                required
                            />
                        </div>
                        <div class="mb-3 col-12 col-md-4">
                            <label htmlFor="category" class="form-label">دسته بندی</label>
                            <select
                                name="category"
                                id="category"
                                class="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="" hidden>دسته بندی سوال را انتخاب کنید</option>
                                <option value="1">برنامه نویسی</option>
                                <option value="2">عمومی</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">افزودن</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default QuestionDesignerAdd;
