import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from 'react-router-dom';

export default function CalendarCard(props) {
  return (
    <Card sx={{ maxWidth: '40vw', m: 5, minWidth: '500px', p: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
          {props.everyoneResponded === 'Yes' ? <FiberManualRecordIcon color="success" /> : <FiberManualRecordIcon color="error" />}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.description}  
        </Typography>
        <Typography variant="body2">
            {props.numResponded} out of {props.total} people responded
        </Typography>
        </CardContent>
      <CardActions>
        <Link to={`/calendar/${props.id}`}>
        <Button variant="contained" size="small">View</Button>
        </Link>
      </CardActions>
    </Card>
  );
}