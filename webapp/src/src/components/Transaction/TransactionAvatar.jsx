import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';

export default function TransactionAvatar({ id, image, title, categories }) {
  function categoryNames() {
    var names = '';

    categories.map(function (category, index) {
      if (index > 0) {
        names += ', ';
      }
      names = names + category.label;

    });
    return names;
  }

  function RenderComponent() {
    if (categories.length > 1) {
      return <>
        <Tooltip key={id} title={'Categorias: ' + categoryNames()} arrow>
          <Badge
            badgeContent='1'
            variant='dot'
            color="secondary"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Avatar alt={title} src={'../logos/' + image} sx={{ backgroundColor: 'green.500' }} />
          </Badge>
        </Tooltip >
      </>
        ;
    }
    return <>
      <Tooltip key={id} title={'Categorias: ' + categoryNames()} arrow>
        <Avatar alt={title} src={'../logos/' + image} sx={{ backgroundColor: 'green.500' }} />
      </Tooltip>
    </>
      ;
  }

  return (
    <RenderComponent />
  );
}
