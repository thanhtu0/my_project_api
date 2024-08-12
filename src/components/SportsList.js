import React, { useEffect, useState } from 'react';
import { get } from '~/utils/request';
import Header from './Header';
import { languages as predefinedLanguages } from '~/utils/constants';

const SportsList = () => {
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const fetchSports = async () => {
            try {
                const data = await get('/sports');
                console.log('API Response:', data);
                if (data && data.data) {
                    setSports(data.data);
                } else {
                    console.error('Invalid data structure:', data);
                }
            } catch (error) {
                console.error('API Error:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSports();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Header languages={predefinedLanguages} selectedLanguage={language} onLanguageChange={setLanguage} />
            <main>
                <h1>Sports List</h1>
                <ul>
                    {sports.map((sport) => (
                        <li key={sport.id}>
                            <h2>{sport.name_translations[language] || sport.name}</h2>
                            <p>Slug: {sport.slug}</p>
                            <ul>
                                {Object.entries(sport.name_translations).map(([lang, name]) => (
                                    <li key={lang}>
                                        {lang}: {name}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default SportsList;
