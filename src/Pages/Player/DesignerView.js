import React, { useEffect } from 'react';
import NavbarPlayer from '../../Components/NavbarPlayer';
import { useParams } from "react-router-dom";

function DesignerView() {
    const { designerId } = useParams();
    
    useEffect(() => {
        document.title = "سامانه پروژه سوال پیچ | مشاهده طراح | بازیکن";
    }, []);

    return (
        <div>
            <NavbarPlayer />

            <div className="container pt-4">
                <div className="row g-4 align-items-center">
                    <div className="col-12 col-md-2 text-center">
                        <img src="/img/user.jpg" alt="user profile" className="rounded-circle" />
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row g-4 row-cols-1">
                            <div className="col">نام: امین</div>
                            <div className="col">نام خانوادگی: حسن زاده</div>
                            <div className="col">ایمیل: hasan@gmail.com</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row g-4 row-cols-1">
                            <div className="col">تعداد سوال های طرح شده: 1000</div>
                            <div className="col">تعداد پاسخ های صحیح بازیکنان: 200</div>
                            <div className="col">تعداد پاسخ های غلط بازیکنان: 300</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="row g-4">
                            <div className="col-12">
                                <button className="btn btn-danger col-12">لغو دنبال کردن</button>
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
