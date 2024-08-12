import React from 'react';

const Header = ({ languages, selectedLanguage, onLanguageChange }) => {
    return (
        <header>
            <h1>Sports App</h1>
            <nav>
                <select value={selectedLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name} {/* Hiển thị tên ngôn ngữ */}
                        </option>
                    ))}
                </select>
            </nav>
            <div>
                Selected Language: {languages.find((lang) => lang.code === selectedLanguage)?.name || selectedLanguage}
            </div>
        </header>
    );
};

export default Header;
