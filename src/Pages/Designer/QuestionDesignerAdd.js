import React, { useEffect, useState } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner';
import useApiRequest from '../../Utils/UseApiRequest';

function QuestionDesignerAdd() {
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | افزودن سوال | طراح"
    }, []);
    
    const apiRequest = useApiRequest();

    const [question, setQuestion] = useState('');
    const [firstOption, setFirstOption] = useState('');
    const [secondOption, setSecondOption] = useState('');
    const [thirdOption, setThirdOption] = useState('');
    const [fourthOption, setFourthOption] = useState('');
    const [correct, setCorrect] = useState('');
    const [level, setLevel] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiRequest('/get_categories', 'POST', true);
                if (response.success && response.data.table) {
                    setCategories(response.data.table);
                } else {
                    setError('خطا در بارگذاری دسته بندی ها');
                }
            } catch (err) {
                setError(err || 'خطا در ارتباط با سرور');
            }
        };
    
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setSuccess(false);

        const questionData = {
            question,
            firstOption,
            secondOption,
            thirdOption,
            fourthOption,
            correct,
            level,
            category,
        };

        try {
            setLoading(true);
            const response = await apiRequest('/new_designed_question', 'POST', true, questionData);

            if (response.success) {
                setSuccess(true);
                setCategory('');
                setLevel('');
                setCorrect('');
                setFourthOption('');
                setThirdOption('');
                setSecondOption('');
                setFirstOption('');
                setQuestion('');
            } else {
                setError(response.error.message || 'خطا در طراحی سوال');
            }
        } catch (err) {
            setError(err || 'خطا در ارتباط با سرور');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavbarDesigner />

            <div className="container pt-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="question" className="form-label">صورت سوال</label>
                        <input
                            type="text"
                            className="form-control"
                            id="question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                    </div>

                    <div className="row">
                        <div className="mb-3 col-12 col-md-3">
                            <label htmlFor="first-option" className="form-label">گزینه اول</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first-option"
                                value={firstOption}
                                onChange={(e) => setFirstOption(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-3">
                            <label htmlFor="second-option" className="form-label">گزینه دوم</label>
                            <input
                                type="text"
                                className="form-control"
                                id="second-option"
                                value={secondOption}
                                onChange={(e) => setSecondOption(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-3">
                            <label htmlFor="third-option" className="form-label">گزینه سوم</label>
                            <input
                                type="text"
                                className="form-control"
                                id="third-option"
                                value={thirdOption}
                                onChange={(e) => setThirdOption(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-3">
                            <label htmlFor="fourth-option" className="form-label">گزینه چهارم</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fourth-option"
                                value={fourthOption}
                                onChange={(e) => setFourthOption(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-12 col-md-4">
                            <label htmlFor="correct" className="form-label">پاسخ</label>
                            <select
                                name="correct"
                                id="correct"
                                className="form-select"
                                value={correct}
                                onChange={(e) => setCorrect(e.target.value)}
                                required
                            >
                                <option value="" hidden>گزینه صحیح را انتخاب کنید</option>
                                <option value="1">گزینه اول</option>
                                <option value="2">گزینه دوم</option>
                                <option value="3">گزینه سوم</option>
                                <option value="4">گزینه چهارم</option>
                            </select>
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label htmlFor="level" className="form-label">درجه سختی</label>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                className="form-control"
                                id="level"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-4">
                            <label htmlFor="category" className="form-label">دسته بندی</label>
                            <select
                                name="category"
                                id="category"
                                className="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="" hidden>دسته بندی سوال را انتخاب کنید</option>
                                {categories.length > 0 ? (
                                    categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>دسته بندی ای وجود ندارد</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'در حال ارسال...' : 'افزودن'}
                        </button>
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">سوال با موفقیت افزوده شد!</div>}
                </form>
            </div>
        </div>
    );
}

export default QuestionDesignerAdd;
