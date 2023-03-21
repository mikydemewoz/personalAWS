import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WorkCard(props) {
  return (
    <Card sx={{ maxWidth: 300, height:345, padding:5}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.Desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
