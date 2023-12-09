import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MonthCardPropertiesList from './MonthCardPropertiesList';
import TodayIcon from '@mui/icons-material/Today';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MonthCard({ month, year, data }) {
  return (
    <Card>
      <CardHeader style={{ textTransform: 'capitalize' }}
        avatar={
          <Avatar sx={{ bgcolor: '#7364DB' }} aria-label="month">
            {month.name.substring(1, 0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={month.name}
      />
      <CardContent>
        <MonthCardPropertiesList data={data} />
      </CardContent>
      <CardActions>
        <Link to={'/month/' + year + '/' + month.id }><OpenInNewIcon /></Link>
      </CardActions>
    </Card>
  );
}
