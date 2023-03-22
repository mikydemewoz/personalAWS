import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WorkCard(props) {
  return (
    <Card sx={{ maxWidth: 300, height:345, padding:5, display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    '&:hover': {
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      '& img': {
        transform: 'scale(1.1)',
        transition: 'transform .2s ease-in-out',
      },
    },}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={props.img}
        sx={{ 
          objectFit: "cover",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
          
        }}
      />
      <CardContent sx={{ 
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: 'transform .2s ease-in-out'
  }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold", color: "primary.main" }}>
          {props.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{ fontStyle: "italic", color: '#333333' }}>
            {props.Desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
