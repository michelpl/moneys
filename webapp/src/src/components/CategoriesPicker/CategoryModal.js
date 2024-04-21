import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DoneIcon from '@mui/icons-material/Done';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import ButtonBase from '@mui/material/ButtonBase';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ColorPicker from 'components/ColorPicker/ColorPicker';


const StyledAutocompletePopper = styled('div')(({ theme }) => ({
    [`& .${autocompleteClasses.paper}`]: {
        boxShadow: 'none',
        margin: 0,
        color: 'inherit',
        fontSize: 13,
    },
    [`& .${autocompleteClasses.listbox}`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
        padding: 0,
        [`& .${autocompleteClasses.option}`]: {
            minHeight: 'auto',
            alignItems: 'flex-start',
            padding: 8,
            borderBottom: `1px solid  ${theme.palette.mode === 'light' ? ' #eaecef' : '#30363d'
                }`,
            '&[aria-selected="true"]': {
                backgroundColor: 'transparent',
            },
            [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
            {
                backgroundColor: theme.palette.action.hover,
            },
        },
    },
    [`&.${autocompleteClasses.popperDisablePortal}`]: {
        position: 'relative',
    },
}));

function PopperComponent(props) {
    const { disablePortal, anchorEl, open, ...other } = props;
    return <StyledAutocompletePopper {...other} />;
}

PopperComponent.propTypes = {
    anchorEl: PropTypes.any,
    disablePortal: PropTypes.bool,
    open: PropTypes.bool.isRequired,
};

const StyledPopper = styled(Popper)(({ theme }) => ({
    border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
    boxShadow: `0 8px 24px ${theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
        }`,
    borderRadius: 6,
    width: 400,
    zIndex: theme.zIndex.modal,
    color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
    padding: 10,
    width: '100%',
    borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
        }`,
    '& input': {
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0d1117',
        padding: 8,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        border: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}`,
        fontSize: 14,
        '&:focus': {
            boxShadow: `0px 0px 0px 3px ${theme.palette.mode === 'light'
                    ? 'rgba(3, 102, 214, 0.3)'
                    : 'rgb(12, 45, 107)'
                }`,
            borderColor: theme.palette.mode === 'light' ? '#0366d6' : '#388bfd',
        },
    },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
    fontSize: 13,
    width: '100%',
    textAlign: 'left',
    paddingBottom: 8,
    color: theme.palette.mode === 'light' ? '#586069' : '#8b949e',
    fontWeight: 600,
    '&:hover,&:focus': {
        color: theme.palette.mode === 'light' ? '#0366d6' : '#58a6ff',
    },
    '& span': {
        width: '100%',
    },
    '& svg': {
        width: 16,
        height: 16,
    },
}));

export default function CategoryModal() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState([labels[1], labels[11]]);
    const [pendingValue, setPendingValue] = React.useState([]);
    const theme = useTheme();

    const handleClick = (event) => {
        setPendingValue(value);
        console.log('handleClick')
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log('handleClose')
        setValue(pendingValue);
        if (anchorEl) {
            anchorEl.focus();
        }
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'github-label' : undefined;

    return (
        <React.Fragment>
            <Box sx={{ width: '400px', marginBottom: '20px' }}>
                <Button disableRipple aria-describedby={id} onClick={handleClick} variant={'outlined'}>
                    <span>Selecionar</span>
                    <ManageSearchIcon />
                </Button>
                <Box sx={{ marginTop: '20px' }}>
                    {value.map((label) => (
                        <Chip
                            key={label.key}
                            avatar={<Avatar alt={label.name} src={label.img} />}
                            color={'primary'}
                            variant="filled"
                            label={label.name}
                            size="small"
                            title={label.name}
                            sx={{
                                maxWidth: '180px',
                                minWidth: '100px',
                                overflow: 'hidden',
                                backgroundColor: label.backgroundColor,
                                color: label.color
                            }}

                        />

                    ))}
                </Box>
                <Divider />
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div>
                        <ColorPicker />
                        <TextField
                            defaultValue="Nova categoria"
                            variant="standard"
                        />
                    </div>
                </Box>
            </Box>
            <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
                <ClickAwayListener onClickAway={handleClose}>
                    <div>
                        <Box
                            sx={{
                                borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
                                    }`,
                                padding: '8px 10px',
                                fontWeight: 600,
                            }}
                        >
                            Buscar categorias
                        </Box>
                        <Autocomplete
                            open
                            multiple
                            onClose={(event, reason) => {
                                if (reason === 'escape') {
                                    handleClose();
                                }
                            }}
                            value={pendingValue}
                            onChange={(event, newValue, reason) => {
                                if (
                                    event.type === 'keydown' &&
                                    (event.key === 'Backspace' || event.key === 'Delete') &&
                                    reason === 'removeOption'
                                ) {
                                    return;
                                }
                                setPendingValue(newValue);
                            }}
                            disableCloseOnSelect
                            PopperComponent={PopperComponent}
                            renderTags={() => null}
                            noOptionsText="Nenhuma encontrada"
                            renderOption={(props, option, { selected }) => (
                                <>
                                    <li {...props}>

                                        <Box
                                            component={DoneIcon}
                                            sx={{ width: 17, height: 17, mr: '5px', ml: '-2px' }}
                                            style={{
                                                visibility: selected ? 'visible' : 'hidden',
                                            }}
                                        />
                                        <Chip
                                            key={option.key}
                                            avatar={<Avatar alt={option.name} src={option.img} />}
                                            color={'primary'}
                                            variant="filled"
                                            label={option.name}
                                            size="small"
                                            title={option.name}
                                            sx={{
                                                maxWidth: '180px',
                                                minWidth: '100px',
                                                overflow: 'hidden',
                                                backgroundColor: option.backgroundColor,
                                                color: option.color
                                            }}

                                        />
                                        <Box
                                            sx={{
                                                flexGrow: 1,
                                                '& span': {
                                                    color:
                                                        theme.palette.mode === 'light' ? '#586069' : '#8b949e',
                                                },
                                            }}
                                        >

                                        </Box>
                                        <Box>
                                            <Button>Excluir</Button>
                                        </Box>
                                    </li>
                                </>
                            )}
                            options={[...labels].sort((a, b) => {
                                // Display the selected labels first.
                                let ai = value.indexOf(a);
                                ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                                let bi = value.indexOf(b);
                                bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                                return ai - bi;
                            })}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <StyledInput
                                    ref={params.InputProps.ref}
                                    inputProps={params.inputProps}
                                    autoFocus
                                    placeholder="Filtrar por nome"
                                />
                            )}
                        />
                    </div>
                </ClickAwayListener>
            </StyledPopper>
        </React.Fragment>
    );
}

// From https://github.com/abdonrd/github-labels
const labels = [
    {
        name: 'good first issue',
        color: '#dcd9ef',
        backgroundColor: '#7057ff',
        description: 'Good for newcomers',
    },
    {
        name: 'help wanted',
        color: '#e1f6f2',
        backgroundColor: '#7bba65',
        description: 'Extra attention is needed',
    },
    {
        name: 'priority: critical',
        color: '#b60205',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'priority: high',
        color: '#d93f0b',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'priority: low',
        color: '#0e8a16',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'priority: medium',
        color: '#fbca04',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: "status: can't reproduce",
        color: '#fec1c1',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'status: confirmed',
        color: '#215cea',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'status: duplicate',
        color: '#cfd3d7',
        backgroundColor: '#7057ff',
        description: 'This issue or pull request already exists',
    },
    {
        name: 'status: needs information',
        color: '#fef2c0',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'status: wont do/fix',
        color: '#eeeeee',
        backgroundColor: '#7057ff',
        description: 'This will not be worked on',
    },
    {
        name: 'Variáveis',
        color: '#ffffff',
        backgroundColor: '#7057ff',
        description: "Something isn't working",
    },
    {
        name: 'type: discussion',
        color: '#d4c5f9',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'type: documentation',
        color: '#006b75',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'type: enhancement',
        color: '#84b6eb',
        backgroundColor: '#7057ff',
        description: '',
    },
    {
        name: 'type: epic',
        color: '#3e4b9e',
        backgroundColor: '#7057ff',
        description: 'A theme of work that contain sub-tasks',
    },
    {
        name: 'type: feature request',
        color: '#fbca04',
        backgroundColor: '#7057ff',
        description: 'New feature or request',
    },
    {
        name: 'type: question',
        color: '#d876e3',
        backgroundColor: '#7057ff',
        description: 'Further information is requested',
    },
];
