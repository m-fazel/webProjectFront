import React from 'react';
import { Link } from 'react-router-dom';
import NavbarPlayer from '../../Components/NavbarPlayer';

function ScorePlayer() {
    return (
        <div>
            <NavbarPlayer /> {/* Using the existing NavbarPlayer component */}
            
            <div class="container pt-4">
                <h4 class="mb-4">جدول امتیازات</h4>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="col-1">#</th>
                            <th class="col-8">نام و نام خانوادگی</th>
                            <th>امتیاز</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><Link class="link-underline link-underline-opacity-0" to="/player-view/2">امین حسن زاده</Link></td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><Link class="link-underline link-underline-opacity-0" to="/player-view/1">سبحان ارشدی</Link></td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><Link class="link-underline link-underline-opacity-0" to="/player-view/5">محمدفاضل سماواتی</Link></td>
                            <td>20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScorePlayer;
