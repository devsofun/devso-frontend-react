import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import SearchBox from './components/SearchBox';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm" style={{
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url('/bg.webp')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Box sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        minWidth: '500px',
      }}>
        <img
          src="/title.png"
          alt="Title"
          style={{
            marginBottom: '16px',
            transform: 'scale(0.5) translateY(-100%)',
          }}
        />
        <SearchBox style={{
          width: '100%',
          transform: 'translateY(-330%)',
        }} />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}