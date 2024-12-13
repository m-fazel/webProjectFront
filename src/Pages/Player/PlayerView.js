import React, { useEffect } from 'react';
import NavbarPlayer from '../../Components/NavbarPlayer';
import { useParams } from "react-router-dom";

function DesignerView() {
    const { playerId } = useParams();

    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | مشاهده بازیکن | بازیکن";
    }, []);

    return (
        <div>
            <NavbarPlayer />

            <div className="container pt-4">
                <div className="row g-4 align-items-center">
                    <div className="col-12 col-md-2 text-center">
                        <img src="/img/user.jpg" alt="user profile" className="rounded-circle"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row g-4 row-cols-1">
                            <div className="col">
                                نام: محمدفاضل
                            </div>
                            <div className="col">
                                نام خانوادگی: سماواتی
                            </div>
                            <div className="col">
                                ایمیل: mrmfamin835@yahoo.com
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row g-4 row-cols-1">
                            <div className="col">
                                امتیاز بازیکن: 20
                            </div>
                            <div className="col">
                                تعداد پاسخ های صحیح: 10
                            </div>
                            <div className="col">
                                تعداد پاسخ های غلط: 10
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="row g-4">
                            <div className="col-12">
                                <button className="btn btn-success col-12">دنبال کردن</button>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-warning col-12">ستاره دادن</button>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-info col-12">گزارش دادن</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesignerView;
