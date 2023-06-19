import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Keyboard from './Keyboard'; // Assuming you have a separate component for the keyboard
import { Button } from '@mui/material';

const HebrewKeyboard = () => {
    const [typedWord, setTypedWord] = useState('');

    // Function to handle typing
    const handleTyping = (word) => {
        setTypedWord(word);
    };

    // Function to handle sending the word
    const handleSend = () => {
        // Perform saving or further operations with the typed word
        console.log('Typed Word:', typedWord);
        setTypedWord(''); // Clear the input field after sending
    };

    const handleDelete = () => {
        setTypedWord((prevWord) => prevWord.slice(0, -1));
      };

    return (
        <div style={{ paddingRight: '250px', paddingLeft: '250px' }}>
            <TextField
                label="Type in Hebrew"
                value={typedWord}
                onChange={handleTyping}
            />
            <Button variant={'outlined'} onClick={handleSend}>Send</Button>
            <Button variant={'outlined'} onClick={handleDelete}>Delete</Button>
            <Keyboard onCharacterClick={handleTyping} />
        </div>
    );
};

export default HebrewKeyboard;
