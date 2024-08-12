import { useEffect, useState } from 'react';
import { get } from '~/utils/request';
import SideBar from './SideBar';

const FootballHighlights = () => {
    const [highlights, setHighlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                const data = await get('v1/');
                setHighlights(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchHighlights();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="highlights-container">
            <div className="highlights-content">
                {highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                        <h2>{highlight.title}</h2>
                        <div className="highlights-info">
                            <h3>
                                <a href={highlight.side1?.url} target="_blank" rel="noopener noreferrer">
                                    {highlight.side1?.name}
                                </a>{' '}
                                vs{' '}
                                <a href={highlight.side2?.url} target="_blank" rel="noopener noreferrer">
                                    {highlight.side2?.name}
                                </a>
                            </h3>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: highlight.embed }}></div>
                        {/* <img src={highlight.thumbnail} alt={highlight.title} /> */}
                        <div className="highlight-watch">
                            <a href={highlight.url} target="_blank" rel="noopener noreferrer">
                                Watch here
                            </a>
                            <p>Date: {new Date(highlight.date).toLocaleDateString()}</p>
                        </div>
                        <div className="highlights-more">
                            <h2>
                                More Video: <a href={highlight.competition?.url}>{highlight.competition?.name}</a>
                            </h2>
                        </div>
                        <div className="highlights-livestream">
                            <h2>{highlight.video?.title}</h2>
                            {/* <div dangerouslySetInnerHTML={{ __html: highlight.video?.embed }}></div> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="highlights-sidebar">
                <SideBar />
            </div>
        </div>
    );
};

export default FootballHighlights;
