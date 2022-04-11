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
            <Posts variant="outlined">
                <CardContent sx={{paddingBottom: "0px"}}>
                    <Typography sx={{ fontSize: 24, display: "flex" }} gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography sx={{ float: "right" }} color="text.secondary">
                        {props.createdAt}
                        </Typography>
                    <Typography>
                        {props.content}
                    </Typography>
                    <Typography>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        그룹인원{props.group.curTeamCnt}/{props.group.maxTeamOf}
                    </Typography>
                    </CardContent>
                    <CardActions sx={{float: "right" }}>
                    <Button  size="small">참가하기</Button>
                </CardActions>
            </Posts>
        </Box>
    )

}

const Posts = styled(Card) ({
    margin: "10px",
    width: "350px",
    height:"250px",
})

export default Post;