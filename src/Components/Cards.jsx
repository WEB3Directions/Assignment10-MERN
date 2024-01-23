import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = (props) => {
  const { title, image, rating, price, category} = props;
  const set_data_handle = () => {
    // You can handle the click event here
    console.log('Card Clicked:', props.title);
  };

  return (
    <div onClick={set_data_handle} className='main'>
      <Card sx={{ maxWidth: 650 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="880"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
             Title: {title}
          </Typography>
          <Typography variant="body4" color="text.secondary">
        <h2>  Rating: {rating.rate} ({rating.count} reviews) </h2>
          
          </Typography>
        </CardContent>
        <CardActions>
          <h2 size="small">Price: ${price}</h2>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <h2 size="small">Category: {category}</h2>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
