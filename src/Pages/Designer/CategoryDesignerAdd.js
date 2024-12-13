import React, { useEffect, useState } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner';
import useApiRequest from '../../Utils/UseApiRequest';

function CategoryDesignerAdd() {
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | افزودن دسته بندی | طراح"
    }, []);

    const apiRequest = useApiRequest();
    
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setSuccess(false);

        const categoryData = { category };

        try {
            setLoading(true);
            const response = await apiRequest('/new_category', 'POST', true, categoryData);

            if (response.success) {
                setSuccess(true);
                setCategory('');
            } else {
                setError(response.error.message || 'خطا در افزودن دسته بندی');
            }
        } catch (err) {
            setError(err || 'خطا در ارتباط با سرور');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavbarDesigner /> {/* Include NavbarDesigner */}

            <div className="container pt-4">
                <form onSubmit={handleSubmit}>
                    {/* Category Name Input */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">نام دسته بندی</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}

                    {success && <div className="alert alert-success">دسته بندی با موفقیت افزوده شد</div>}

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'در حال افزودن...' : 'افزودن'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CategoryDesignerAdd;
