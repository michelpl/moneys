import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ArgonBox from 'components/Argon/ArgonBox';
import { Card } from '@mui/material';
import ArgonTypography from 'components/Argon/ArgonTypography';
import clsx from 'clsx';

const columns = [
  {
    field: 'description',
    headerName: 'Descrição',
    type: 'text',
    width: 250,
    sortable: true,
    editable: true,
    cellClassName: (params) => {
      return clsx('super-app', {
        empty: params.hasFocus !== true && (params.value === null || params.value === undefined)
      });
    },
  },
  {
    field: 'amount',
    headerName: 'Valor',
    type: 'number',
    width: 250,
    sortable: true,
    editable: true,
    cellClassName: (params) => {
      return clsx('super-app', {
        empty: params.hasFocus !== true && (params.value === null || params.value === undefined)
      });
    },
  },
  {
    field: 'paymentDate',
    headerName: 'Data de pagamento',
    type: 'text',
    sortable: true,
    editable: true,
    width: 250,
    cellClassName: (params) => {
      return clsx('super-app', {
        empty: params.hasFocus !== true && (params.value === null || params.value === undefined)
      });
    },
  },
  {
    field: 'dueDate',
    headerName: 'Data de vencimento',
    type: 'text',
    sortable: true,
    width: 250,
    editable: true,
    cellClassName: (params) => {
      return clsx('super-app', {
        empty: params.hasFocus !== true && (params.value === null || params.value === undefined)
      });
    },
  },
  {
    field: 'paymentMethod',
    headerName: 'Método de pagamento',
    type: 'text',
    sortable: true,
    editable: true,
    width: 250,
    cellClassName: (params) => {
      return clsx('super-app', {
        empty: params.hasFocus !== true && (params.value === null || params.value === undefined)
      });
    },
  },
  {
    field: 'categories',
    headerName: 'Categorias',
    type: 'number',
    sortable: true,
    width: 250,
    editable: true,
    cellClassName: (params) => {
      return clsx('super-app', {
        empty: params.hasFocus !== true && (params.value === null || params.value === undefined)
      });
    },
  },
  {
    field: 'actions',
    headerName: 'Ações',
    type: 'text',
    width: 250,
    sortable: true,
    editable: true,
    cellClassName: (params) => {
      return clsx('super-app', {
        empty: params.hasFocus !== true && (params.value === null || params.value === undefined)
      });
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },

];

export default function DataGridDemo() {
  return (


    <ArgonBox py={3}>
      <Card>
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <ArgonTypography variant="h6">Entradas</ArgonTypography>
        </ArgonBox>
        <ArgonBox
                sx={{

                  width: '100%',
                  '& .super-app-theme--cell': {
                    backgroundColor: 'rgba(224, 183, 60, 0.55)',
                    color: '#1a3e72',
                    fontWeight: '600',
                  },
                  '& .super-app.empty': {
                    borderBottom: '1px solid !important',
                    borderColor: '#dedede!important',
                    color: '#1a3e72',
                    fontWeight: '600',
                  },
                  '& .super-app.purpleUnderline': {
                    
                    borderColor: '#825EE4!important',
                    border:2,
                    color: '#1a3e72',
                    fontWeight: '600',
                  },
                }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            
            sx={{
              boxShadow: 0,
              border: 0,
              borderColor:"#fff"
            }}
          />
        </ArgonBox>
      </Card>
    </ArgonBox>
  );
}