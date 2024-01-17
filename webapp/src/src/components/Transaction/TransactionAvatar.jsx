import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';

export default function TransactionAvatar({ id, categories }) {
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

    const [transactionIcon, setTransactionIcon] = React.useState('');
    React.useEffect(() => {
      if (categories.length > 0 && categories[0].icon !== undefined) {
        setTransactionIcon(categories[0].icon);
        return;
      }
      setTransactionIcon('money_641821.png');
    }, [categories,]);

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

            <Avatar alt='$' src={'../logos/' + transactionIcon} />
          </Badge>
        </Tooltip >
      </>
        ;
    }
    return <>
      <Tooltip key={id} title={'Categorias: ' + categoryNames()} arrow>
        <Avatar alt='$' src={'../logos/' + transactionIcon} />
      </Tooltip>
    </>
      ;
  }

  return (
    <RenderComponent />
  );
}
