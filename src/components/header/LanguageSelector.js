import React, {useState, useRef, useEffect, useCallback} from 'react';

import ru from '../../img/icons/flags/russia.png';
import en from '../../img/icons/flags/england.png';

const languages = {
    'Русский': ru,
    'English': en,
};

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Русский');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            console.log('click outside');
        }
    }, []);

    useEffect(() => {
        document.body.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.body.removeEventListener('mousedown', handleClickOutside);
            console.log('remove listener');
        };
    }, [handleClickOutside]);

    return (
        <div className="flex items-center" ref={dropdownRef}>

            <div className="relative">

                <button
                    className="flex items-center focus:outline-none text-gray-600 hover:text-gray-800"
                    onClick={toggleDropdown}
                >
                    <img src={languages[selectedLanguage]} alt="Language" className="h-6 w-6 mr-2"/>
                    <span>{selectedLanguage}</span>

                    <svg className={`ml-2 h-5  w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#dropdownArrow`}/>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-amber-50 rounded-md shadow-lg z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {Object.keys(languages).map((language) => (
                                <div key={language} className=" hover:bg-gray-100">
                                    <button
                                        onClick={() => handleLanguageChange(language)}
                                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        <img src={languages[language]} alt="Language" className="h-7 w-7 mr-2"/>
                                        {language}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;