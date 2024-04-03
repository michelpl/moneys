/* eslint-disable react/prop-types */
import { useState } from 'react';
import { DataGrid, GridActionsCellItem, GridFooter, GridFooterContainer, GridRowModes, GridToolbarContainer } from '@mui/x-data-grid';
import ArgonBox from 'components/Argon/ArgonBox';
import { Button, Card, Chip } from '@mui/material';
import ArgonTypography from 'components/Argon/ArgonTypography';
import CommentIcon from '@mui/icons-material/Comment';
import clsx from 'clsx';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { randomId } from '@mui/x-data-grid-generator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faFlag } from '@fortawesome/free-regular-svg-icons'
import { grey } from '@mui/material/colors';
import MyPopover from 'components/MyPopover';


function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'description' },
    }));
  };

  return (
    <GridFooterContainer sx={{ padding: 3 }}>
      <Button sx={{ color: "primary.main" }} onClick={handleClick}>
        Adicionar linha
      </Button>
    </GridFooterContainer>

  );
}

export default function DataGridDemo() {

  const [displayPicker, setDisplayPicker] = useState('none')

  function cellDecoration(params) {
    return clsx('super-app', {
      empty: params.hasFocus !== true && (params.value === null || params.value === undefined || params.value === '')
    });
  }

  function RenderNotesButton(props) {
    return (
      <>
        <FontAwesomeIcon icon={faMessage} style={{ color: "#B197FC", height: "20px" }} />
      </>
    );
  }

  function RenderCategoryComponent() {
    return (<Chip label="Cartão de crédito" />)
  }

  const handleDeleteClick = (id) => () => {
    console.log(id);
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    {
      width: 50,
      sortable: false,
      headerAlign: 'left',
      renderCell:  () => { return (<MyPopover />) }
    },
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
      headerName: 'Verba planejada',
      type: 'number',
      width: 120,
      sortable: true,
      editable: true,
      cellClassName: (params) => {
        return cellDecoration(params);
      },
    },
    {
      field: 'paidAmount',
      headerName: 'Verba utilizada',
      type: 'number',
      width: 120,
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
      width: 70,
      sortable: true,
      editable: true,
      cellClassName: (params) => {
        return cellDecoration(params);
      },
    },
    {
      field: 'paymentDate',
      headerName: 'Data de pagamento',
      type: 'date',
      sortable: true,
      editable: true,
      width: 150,
      cellClassName: (params) => {
        return cellDecoration(params);
      },
    },
    {
      field: 'dueDate',
      headerName: 'Data de vencimento',
      type: 'date',
      sortable: true,
      width: 250,
      editable: true,
      cellClassName: (params) => {
        return cellDecoration(params);
      },
    },
    {
      field: 'Método de pagamento',
      type: 'singleSelect',
      width: 120,
      editable: true,
      valueOptions: ({ row }) => {
        return ['', 'EU-resident', 'junior', 'Other'];
      },
      cellClassName: (params) => {
        return cellDecoration(params);
      },
    },
    {
      field: 'categories',
      headerName: 'Categorias',
      type: 'text',
      headerAlign: 'center',
      sortable: true,
      width: 150,
      editable: true,
      cellClassName: (params) => {
        return cellDecoration(params);
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerAlign: 'right',
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          key={'del'}
          icon={<RenderNotesButton />}
          label="Delete"
          onClick={(params.id) = {}}
        />,
        <GridActionsCellItem
          key={'sec'}
          icon={<FontAwesomeIcon icon={faFlag} style={{ height: "20px", color: grey[400] }} />}
          label="Valor em aberto"
          onClick={(params.id) = {}}
        />,
        <GridActionsCellItem
          key={'file'}
          icon={<DeleteIcon />}
          label="Excluir"
          onClick={handleDeleteClick(params.row.id)}
          showInMenu
        />,
      ],
    },
  ];
  const date = new Date(2024, '04', '02');
  const initialRows = [
    {
      id: 1,
      description: '',
      budget: '',
      installments: '',
      dueDate: date,
      paymentDate: date,
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
      dueDate: date,
      paymentDate: date,
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
      dueDate: date,
      paymentDate: date,
      usedBudget: '100.00',
      notUsedBudget: '50.00',
      paymentMethod: 'Pix',
      categories: 'aaa',
      status: 'paid',
      notes: 3,
      actions: 'edit button '
    },
  ];
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});

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
            autoHeight={true}
            slots={{
              footer: EditToolbar,
            }}
            slotProps={{
              footer: { setRows, setRowModesModel },
            }}
            sx={{
              boxShadow: 0,
              border: 0,
              borderColor: "#fff",
            }}
          />

        </ArgonBox>
        
      </Card>
    </ArgonBox>
  );
}