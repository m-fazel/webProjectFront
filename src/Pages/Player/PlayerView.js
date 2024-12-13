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

            <div class="container pt-4">
                <div class="row g-4 align-items-center">
                    <div class="col-12 col-md-2 text-center">
                        <img src="/img/user.jpg" alt="user profile" class="rounded-circle"/>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="row g-4 row-cols-1">
                            <div class="col">
                                نام: محمدفاضل
                            </div>
                            <div class="col">
                                نام خانوادگی: سماواتی
                            </div>
                            <div class="col">
                                ایمیل: mrmfamin835@yahoo.com
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="row g-4 row-cols-1">
                            <div class="col">
                                امتیاز بازیکن: 20
                            </div>
                            <div class="col">
                                تعداد پاسخ های صحیح: 10
                            </div>
                            <div class="col">
                                تعداد پاسخ های غلط: 10
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-2">
                        <div class="row g-4">
                            <div class="col-12">
                                <button class="btn btn-success col-12">دنبال کردن</button>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-warning col-12">ستاره دادن</button>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-info col-12">گزارش دادن</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesignerView;
