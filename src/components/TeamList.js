import React, { useEffect, useState } from 'react';
import { fetchAllTeams } from '~/utils/fetchAllTeams'; // Điều chỉnh đường dẫn theo cấu trúc thư mục của bạn

const TeamsList = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTeams = async () => {
            try {
                const data = await fetchAllTeams();
                console.log('All Teams Data:', data);
                setTeams(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getTeams();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Teams List</h1>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>
                        <h2>{team.name}</h2>
                        <p>Slug: {team.slug}</p>
                        <img src={team.logo} alt={team.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamsList;
