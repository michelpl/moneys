import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';

export default function TransactionAvatar({ id, image, title }) {
  return (
    <Tooltip key={id} title={'Categories: ' + title} arrow>
      <Badge
        badgeContent='1'
        variant='dot'
        color="secondary"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Avatar alt={title} src={'../logos/' + image} sx={{ backgroundColor: '#fff' }} />
      </Badge>
    </Tooltip>
  );
}
