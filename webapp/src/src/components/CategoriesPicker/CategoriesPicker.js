/* eslint-disable react/prop-types */
import * as React from 'react';

import Chip from '@mui/material/Chip';

import {Dialog, DialogActions, DialogTitle, DialogContent, Stack, DialogContentText} from "@mui/material";
import CategoryChip from "./CategoryChip";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CategoryModal from "./CategoryModal";


export default function ChipsArray() {
    const [dialogState, setDialogState] = React.useState(false);

    const handleClickOpen = () => {
        setDialogState(true);
    };

    const handleCancel = () => {
        setDialogState(false);
    };

    const handleOk = () => {
        setDialogState(false);
    };

    const [chipData, setChipData] = React.useState([
        {key: 0, label: 'Angular', backgroundColor: '#a54b4b', color: '#333', src: ''},
        {key: 3, label: 'Gastos fixos', backgroundColor: '#d55bca', color: '#fff', img: 'logos/rico.png'},
        {key: 4, label: 'Gastos Variáveis', backgroundColor: '#3f2172', color: '#fff', img: 'logos/nubank.png'},
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };


    return (
        <>
            <Stack minWidth={'100%'} spacing={0.5} direction="row" useFlexGap flexWrap="wrap" onClick={handleClickOpen}>
                {chipData.map((data) => {
                    return (
                        <Chip
                            key={data.key}
                            avatar={<Avatar alt={data.label} src={data.img}/>}
                            color={'primary'}
                            variant="filled"
                            label={data.label}
                            size="small"
                            title={data.label}
                            sx={{
                                maxWidth: '180px',
                                minWidth: '100px',
                                overflow: 'hidden',
                                backgroundColor: data.backgroundColor,
                                color: data.color
                            }}
                            onDelete={handleDelete(data)}
                        />
                    );
                })}
            </Stack>
            <Dialog
                open={dialogState}
                onClose={handleCancel}
                PaperProps={{
                    component: 'paper',
                }}
            >
                <DialogTitle>Categorias</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        <CategoryModal sx={{width: '400px'}}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
