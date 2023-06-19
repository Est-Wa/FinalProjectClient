import React from 'react';
import Button from '@mui/material/Button';

const Keyboard = ({ onCharacterClick }) => {
    const hebrewCharacters = [
        'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס',
        'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת', 'ַ', 'ֶ', 'ִ', 'ֵ', 'ֻ', 'ֹ'
    ];

    const handleCharacterClick = (character) => {
        onCharacterClick((prevWord) => prevWord + character);
    };

    return (
        <div>
            {hebrewCharacters.map((character, index) => (
                <Button
                    size='large'
                    key={index}
                    variant="contained"
                    onClick={() => handleCharacterClick(character)}
                    sx={{margin:'0.5%'}}
                >
                    {character}
                </Button>
            ))}
        </div>
    );
};

export default Keyboard;
