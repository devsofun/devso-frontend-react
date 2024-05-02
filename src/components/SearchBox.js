import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function SearchBox() {
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '50px',
                width: '100%',
                boxShadow: '0px 1px 0.3px -0.6px rgba(0,0,0,0.2), 0px 0.6px 0.6px 0px rgba(0,0,0,0.14), 0px 0.3px 1.6px 0px rgba(0,0,0,0.12)',
                '&:hover': {
                    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
                }
            }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="有问题尽管问我…"
                inputProps={{ 'aria-label': '有问题尽管问我…' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <MicIcon />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
            <IconButton sx={{ p: '10px' }} aria-label="directions">
                <PhotoCameraIcon />
            </IconButton>
        </Paper>
    );
}