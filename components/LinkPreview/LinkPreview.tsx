import React from 'react';
import { Box, Typography, useTheme} from '@mui/material';
import SourceIcon from '@mui/icons-material/Source';

interface LinkPreviewProps {
  title: string;
  url: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ title, url }) => {
  const handleClick = () => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: '#f5f5f5', // Change background color on hover
        },
      }}
      onClick={handleClick}
    >
      <SourceIcon sx={{ width: 50, height: 50, marginRight: '10px', fill: theme.palette.primary.main}} />
      <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.primary}>
        {title}
      </Typography>
    </Box>
  );
};

export default LinkPreview;
