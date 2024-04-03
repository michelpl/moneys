
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { Input } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function handleReaction(data) {
    console.log(data.emoji);
  }

export default function MyPicker() {
    const [displayPicker, setDisplayPicker] = useState('none');
    const [selectedEmoji, setSelectedEmoji] = useState('');

    return (
        <>

        </>
    );
}