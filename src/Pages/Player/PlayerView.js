import React, { useEffect, useState } from 'react';
import NavbarPlayer from '../../Components/NavbarPlayer';
import { useParams } from "react-router-dom";
import useApiRequest from '../../Utils/UseApiRequest'; // Assuming useApiRequest is defined for API calls

function DesignerView() {
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | مشاهده بازیکن | بازیکن";
    }, []);

    const { playerId } = useParams();
    const [playerData, setPlayerData] = useState(null);
    const apiRequest = useApiRequest();

    useEffect(() => {
        // Fetch player data when the component mounts
        const fetchPlayerData = async () => {
            const response = await apiRequest(`/player_view`, 'POST', true, { player_id: parseInt(playerId) });
            if (response.success) {
                setPlayerData(response.data); // Assuming response.data contains the player data
            } else {
                alert(response.error.message); // Handle errors
            }
        };

        fetchPlayerData();
    }, []);

    // Handle follow/unfollow button click
    const handleFollowClick = async () => {
        if (!playerData) return;

        const endpoint = playerData.isFollowing ? '/unfollow' : '/follow';
        const response = await apiRequest(endpoint, 'POST', true, { user_id: parseInt(playerId) });

        if (response.success) {
            // Update the playerData to reflect the new follow status
            setPlayerData((prevData) => ({
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
                {playerData ? (
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-md-2 text-center">
                            <img src={playerData.profileImage || '/img/user.jpg'} alt="user profile" className="rounded-circle" />
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row g-4 row-cols-1">
                                <div className="col">
                                    نام: {playerData.firstname}
                                </div>
                                <div className="col">
                                    نام خانوادگی: {playerData.lastname}
                                </div>
                                <div className="col">
                                    ایمیل: {playerData.email}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row g-4 row-cols-1">
                                <div className="col">
                                    امتیاز بازیکن: {playerData.playerScore}
                                </div>
                                <div className="col">
                                    تعداد پاسخ های صحیح: {playerData.correctAnswerCount}
                                </div>
                                <div className="col">
                                    تعداد پاسخ های غلط: {playerData.notCorrectAnswerCount}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="row g-4">
                                <div className="col-12">
                                    <button
                                        className={`btn ${playerData.isFollowing ? 'btn-danger' : 'btn-success'} col-12`}
                                        onClick={handleFollowClick}
                                    >
                                        {playerData.isFollowing ? 'لغو دنبال کردن' : 'دنبال کردن'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">بازیکن یافت نشد</div>
                )}
            </div>
        </div>
    );
}

export default DesignerView;
