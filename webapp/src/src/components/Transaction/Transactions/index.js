/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ArgonBox from 'components/Argon/ArgonBox';
import { Button, Card } from '@mui/material';
import ArgonTypography from 'components/Argon/ArgonTypography';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import clsx from 'clsx';
import { grey } from '@mui/material/colors';

function cellDecoration(params) {
  return clsx('super-app', {
    empty: params.hasFocus !== true && (params.value === null || params.value === undefined || params.value === '')
  });
}

function RenderNotesButton(props) {
  return (
    <ChatBubbleOutlineOutlinedIcon className='cellIcon' sx={{color:'primary.main'}} />
  );
}

const columns = [
  {
    field: 'description',
    headerName: 'Descrição',
    type: 'text',
    width: 250,
    sortable: true,
    editable: true,
    cellClassName: (params) => {
      return cellDecoration(params);
    },
  },
  {
    field: 'amount',
    headerName: 'Valor',
    type: 'number',
    width: 100,
    sortable: true,
    editable: true,
    cellClassName: (params) => {
      return cellDecoration(params);
    },
  },
  {
    field: 'installments',
    headerName: 'Parcelas',
    type: 'text',
    width: 250,
    sortable: true,
    editable: true,
    cellClassName: (params) => {
      return cellDecoration(params);
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
      return cellDecoration(params);
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
      return cellDecoration(params);
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
      return cellDecoration(params);
    },
  },
  {
    field: 'categories',
    headerName: 'Categorias',
    type: 'text',
    sortable: true,
    width: 150,
    editable: true,
    cellClassName: (params) => {
      return cellDecoration(params);
    },
  },

  {
    field: 'notes',
    headerName: 'Anotações',
    width: 150,
    renderCell: RenderNotesButton,
    align: 'center'
  },
  {
    field: 'actions',
    headerName: 'Ações',
    type: 'text',
    width: 250,
    sortable: true,
    editable: true,
    cellClassName: (params) => {
      return cellDecoration(params);
    },
  },
];

const rows = [
  {
    id: 1,
    description: '',
    budget: '',
    installments: '',
    dueDate: '',
    paymentDate: '',
    usedBudget: '1',
    notUsedBudget: '',
    paymentMethod: '',
    categories: '',
    status: '',
    comments: '',
    actions: ''
  },
  {
    id: 2,
    description: '',
    budget: '',
    installments: '',
    dueDate: '',
    paymentDate: '',
    usedBudget: '1',
    notUsedBudget: '',
    paymentMethod: '',
    categories: '',
    status: '',
    comments: '',
    actions: ''
  },

  {
    id: 3,
    description: 'Snow',
    budget: '150.00',
    installments: '1/5',
    dueDate: '05/03/2024',
    paymentDate: '05/03/2024',
    usedBudget: '100.00',
    notUsedBudget: '50.00',
    paymentMethod: 'Pix',
    categories: 'credit card, fixed',
    status: 'paid',
    notes: 3,
    actions: 'edit button '
  },


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
              border: 2,
              color: '#1a3e72',
              fontWeight: '600',
            },
          }}
        >
          <DataGrid
            checkboxSelection
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            hideFooter
            sx={{
              boxShadow: 0,
              border: 0,
              borderColor: "#fff"
            }}
          />
        </ArgonBox>
      </Card>
    </ArgonBox>
  );
}