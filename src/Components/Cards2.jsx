import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Cards2 = (props) => {
  const { title, image, description, rating, price, category } = props;

  return (
    <div>
      <div className='card2'>
      <div>
        <Card sx={{ maxWidth: 1500 }}>
          <CardMedia component="img" alt="product" height="1200" image={image} />
          
        </Card>
        &nbsp; &nbsp; &nbsp; &nbsp; <br/> <br/> <br/>
      </div>
      
      <div>
        
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
           <b> Title: {title} </b>
          </Typography>
          <Typography variant="body9" color="text.secondary">
            <h2> Description: {description} <br /> <br />
              Rating: {rating.rate} ({rating.count} reviews) </h2>
          </Typography>
        </CardContent>
        <CardActions>
          <h1 size="small">Price: ${price}</h1>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <h2 size="small">Category: {category}</h2>
        </CardActions>

      </div>

      </div>

    </div>
  );
};

export default Cards2;
