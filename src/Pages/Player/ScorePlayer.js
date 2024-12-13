import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarPlayer from '../../Components/NavbarPlayer';
import useApiRequest from '../../Utils/UseApiRequest'; // Assuming useApiRequest is defined for API calls

function ScorePlayer() {
    const [scoreTable, setScoreTable] = useState([]);
    const apiRequest = useApiRequest();

    // Fetch the score table from /score_player endpoint
    useEffect(() => {
        const fetchScoreTable = async () => {
            const response = await apiRequest('/score_player', 'POST', true);
            if (response.success) {
                setScoreTable(response.data.table); // Assuming response.data.table contains the score table
            }else{
                alert(response.error.message); // Handle errors
            }
        };

        fetchScoreTable();
    }, []);

    return (
        <div>
            <NavbarPlayer /> {/* Using the existing NavbarPlayer component */}
            
            <div className="container pt-4">
                <h4 className="mb-4">جدول امتیازات</h4>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="col-1">#</th>
                            <th className="col-8">نام و نام خانوادگی</th>
                            <th>امتیاز</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scoreTable.length > 0 ? (
                            scoreTable.map((player, index) => (
                                <tr key={player.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Link className="link-underline link-underline-opacity-0" to={`/player-view/${player.id}`}>
                                            {player.name}
                                        </Link>
                                    </td>
                                    <td>{player.score}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">کاربری وجود ندارد</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScorePlayer;
