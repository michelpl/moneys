/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
    GridFooterContainer,
    GridRowModes,
} from '@mui/x-data-grid';
import ArgonBox from 'components/Argon/ArgonBox';
import { Button, Card, Chip } from '@mui/material';
import ArgonTypography from 'components/Argon/ArgonTypography';
import { randomId } from '@mui/x-data-grid-generator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import pxToRem from "../../../assets/theme/functions/pxToRem";
import MoneysDataGrid from "../../MoneysDataGrid/MoneysDataGrid";
import getData from './data/data';

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
    const [displayPicker, setDisplayPicker] = useState('none');
    const [data, setData] = useState(getData());

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
                            <MoneysDataGrid columns={data.columns} data={data.rows} />
                        </ArgonBox>
                    </ArgonBox>
                </Card>
            </ArgonBox>
        </>
    );
}
