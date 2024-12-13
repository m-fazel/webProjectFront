import React, { useEffect, useState } from 'react';
import NavbarPlayer from '../../Components/NavbarPlayer';
import { useParams } from "react-router-dom";
import useApiRequest from '../../Utils/UseApiRequest'; // Assuming useApiRequest is defined for API calls

function DesignerView() {
    const { designerId } = useParams();
    const [designerData, setDesignerData] = useState(null);
    const apiRequest = useApiRequest();

    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | مشاهده طراح | بازیکن";

        // Fetch designer data when the component mounts
        const fetchDesignerData = async () => {
            const response = await apiRequest(`/designer_view`, 'POST', true, { designer_id: designerId });
            if (response.success) {
                setDesignerData(response.data); // Assuming response.data contains the designer data
            } else {
                alert(response.error.message); // Handle errors
            }
        };

        fetchDesignerData();
    }, [designerId]);

    // Handle follow/unfollow button click
    const handleFollowClick = async () => {
        if (!designerData) return;

        const endpoint = designerData.isFollowing ? '/unfollow' : '/follow';
        const response = await apiRequest(endpoint, 'POST', true, { user_id: designerId });

        if (response.success) {
            // Update the designerData to reflect the new follow status
            setDesignerData((prevData) => ({
                ...prevData,
                isFollowing: !prevData.isFollowing
            }));
        } else {
            alert(response.error.message); // Handle errors
        }
    };

    return (
        <div>
            <NavbarPlayer />

            <div className="container pt-4">
                {designerData ? (
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-md-2 text-center">
                            <img src={designerData.profileImage || '/img/user.jpg'} alt="designer profile" className="rounded-circle" />
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row g-4 row-cols-1">
                                <div className="col">نام: {designerData.firstname}</div>
                                <div className="col">نام خانوادگی: {designerData.lastname}</div>
                                <div className="col">ایمیل: {designerData.email}</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row g-4 row-cols-1">
                                <div className="col">تعداد سوال های طرح شده: {designerData.designedCount}</div>
                                <div className="col">تعداد پاسخ های صحیح بازیکنان: {designerData.correctAnsweredCount}</div>
                                <div className="col">تعداد پاسخ های غلط بازیکنان: {designerData.notCorrectAnsweredCount}</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="row g-4">
                                <div className="col-12">
                                    <button
                                        className={`btn ${designerData.isFollowing ? 'btn-danger' : 'btn-success'} col-12`}
                                        onClick={handleFollowClick}
                                    >
                                        {designerData.isFollowing ? 'لغو دنبال کردن' : 'دنبال کردن'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">طراح یافت نشد</div>
                )}
            </div>
        </div>
    );
}

export default DesignerView;
