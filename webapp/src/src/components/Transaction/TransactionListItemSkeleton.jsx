import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ListItem, ListItemIcon, ListItemText, Skeleton } from '@mui/material';

export default function TransactionListItemSkeleton() {

  return (
    <Paper variant='outlined' sx={{ marginBottom: 0.5, padding: 0, backgroundColor: 'background.paper' }}>
      <ListItem alignItems="flex-start"
      >
        <ListItemIcon>
          <Skeleton variant="circular" width={45} height={45} />
        </ListItemIcon>
        <ListItemText
          primary={<Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />}
          secondary={
            <Skeleton variant="text" width={150} />
          }
        />
        <ListItemText
          sx={{ textAlign: 'right', marginRight: 5 }}
          edge="end"
          primary={
            <>
              <span><Skeleton variant="text" /></span>
            </>
          }
          secondary={
            <span><Skeleton variant="text" /></span>
          }
        />
      </ListItem>
    </Paper>
  );
}
