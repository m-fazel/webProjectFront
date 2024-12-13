import React, { useEffect, useState } from 'react';
import NavbarDesigner from '../../Components/NavbarDesigner'; // Import NavbarDesigner

function CategoryDesignerAdd() {
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | افزودن دسته بندی | طراح"
    }, []);

    // State hook for category name
    const [name, setName] = useState('');

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to the server or handle it as needed
        console.log({ name });
    };

    return (
        <div>
            <NavbarDesigner /> {/* Include NavbarDesigner */}

            <div class="container pt-4">
                <form onSubmit={handleSubmit}>
                    {/* Category Name Input */}
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">نام دسته بندی</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
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

export default CategoryDesignerAdd;
