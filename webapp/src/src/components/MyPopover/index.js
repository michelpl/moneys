import { useState, useMemo } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmojiPicker from 'emoji-picker-react';
import { Box, Input, InputBase } from '@mui/material';

export default function MyPopover() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleReaction = (data) => {
        console.log(data.emoji);
        setSelectedEmoji(data.emoji);
        handleClose();
    }

    const RenderEmojiPicker = () => {
        return (
            <>
                <EmojiPicker onEmojiClick={(data) => { handleReaction(data) }} autoFocusSearch={false} />
            </>
        )
    }

    return (
        <>

            <Input onClick={handleClick} value={selectedEmoji} sx={{ width: 5, padding: 0, borderBottom: '0px', outline: 'none' }} />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <RenderEmojiPicker />
            </Popover>

        </>
    );
}

