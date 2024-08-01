/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
    DataGrid,
    GridActionsCellItem,
    GridFooter,
    GridFooterContainer,
    GridRowModes,
    GridToolbarContainer
} from '@mui/x-data-grid';
import ArgonBox from 'components/Argon/ArgonBox';
import { Button, Card, Chip } from '@mui/material';
import ArgonTypography from 'components/Argon/ArgonTypography';
import clsx from 'clsx';
import DeleteIcon from '@mui/icons-material/Delete';
import { randomColor, randomId, randomJobTitle } from '@mui/x-data-grid-generator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faFlag } from '@fortawesome/free-regular-svg-icons'
import { grey } from '@mui/material/colors';
import MyPopover from 'components/MyPopover';
import pxToRem from "../../../assets/theme/functions/pxToRem";
import MoneysDataGrid from "../../MoneysDataGrid/MoneysDataGrid";
import ChipList from 'components/CategoriesPicker/ChipList';
import CategoriesPicker from 'components/CategoriesPicker/CategoriesPicker';

function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { key: randomId(), id, name: '', age: '', isNew: true }]);
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
                <FontAwesomeIcon icon={faMessage} style={{ color: "#B197FC", height: pxToRem(20) }} />
            </>
        );
    }

    const handleDeleteClick = (id) => () => {
        console.log(id);
        setRows(rows.filter((row) => row.id !== id));
    };

    const rows = [
        {
            order: 1,
            description: "Salário com descrição bem grande mesmo",
            amount: 129.9,
            isPaid: true,
            paymentDate: new Date('12/01/2022'),
            dueDate: new Date('05/10/2007'),
            categories: [
                {
                    id: 1,
                    label: 'Teste',
                    backgroundColor: "#fdefde",
                    color: "#fdefde",
                },
            ]
        },
        {
            order: 1,
            description: "Segunda entrada com descrição grande",
            amount: 129.9,
            isPaid: true,
            paymentDate: new Date('12/01/2022'),
            dueDate: new Date('05/10/2007'),
            categories: [
                {
                    id: 1,
                    label: 'Salário',
                    label: 'Teste',
                    backgroundColor: "#ddd",
                    color: "#ddd",
                },
                ,
                {
                    id: 2,
                    label: 'Mais uma categoria',
                    label: 'Teste',
                    backgroundColor: "#abcabc",
                    color: "#abcabc",
                },
                {
                    id: 3,
                    label: 'Outras entradas',
                    label: 'Teste',
                    backgroundColor: "#321fff",
                    color: "#321fff",
                },
            ]
        },
        
    ];

    const columns = [
        {
            field: "order",
            headerName: 'Ordem',
            editable: false,
            rowDrag: true,
            maxWidth:120
        },
        {
            field: "description",
            resizable: true,
            headerName: "Descrição",
            editable: true,
            
        },
        {
            field: "amount",
            resizable: true,
            headerName: "Valor",
            editable: true,
            maxWidth: 150,
            
        },
        {
            field: "isPaid",
            headerName: "Pago?",
            editable: true,
            cellRenderer: 'agCheckboxCellRenderer',
            cellEditor: 'agCheckboxCellEditor',
            maxWidth: 100,
            resizable: false
        },
        {
            field: "paymentDate",
            resizable: true,
            headerName: 'Data do pagamento',
            cellEditor: "agDateCellEditor",
            editable: true,
            valueFormatter: (params) => {
                if (!params.value) {
                    return "";
                }
                const month = params.value.getMonth() + 1;
                const day = params.value.getDate();
                return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${params.value.getFullYear()}`;
            },
        },
        {
            field: "dueDate",
            headerName: 'Data de vencimento',
            cellEditor: "agDateCellEditor",
            resizable: true,
            editable: true,
            valueFormatter: (params) => {
                if (!params.value) {
                    return "";
                }
                const month = params.value.getMonth() + 1;
                const day = params.value.getDate();
                return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${params.value.getFullYear()}`;
            },
        },
        {
            field: "categories",
            headerName: 'Categorias',
            cellRenderer: ChipList,
            resizable: true,
            cellEditor: CategoriesPicker,
            cellEditorPopup: true,
            editable: true,
        },
        {
            field: "actions",
            headerName: 'Ações',
            editable: false,
        }
    ];

    return (
        <>
            <ArgonBox py={3}>
                <Card>
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
                        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <ArgonTypography variant="h6">Entradas</ArgonTypography>
                        </ArgonBox>
                        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <MoneysDataGrid columns={columns} data={rows} />
                        </ArgonBox>
                    </ArgonBox>
                </Card>
            </ArgonBox>
        </>
    );
}
