import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Post = (props) => {

    return (
        <Box sx={{ minWidth: 275, display: "flex", justifyContent: "center", m:1 }}>
            <Posts variant="outlined">{card}</Posts>
            <Posts variant="outlined">{card}</Posts>
            <Posts variant="outlined">{card}</Posts>
        </Box>
    )

}

const Posts = styled(Card) ({
    margin: "10px",
    width: "350px",
    height:"250px",
})

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default Post;