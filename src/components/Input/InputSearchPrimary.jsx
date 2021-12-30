import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { blue } from '@mui/material/colors';
import ButtonIcon from '../button/ButtonIcon'
import EditRoadIcon from '@mui/icons-material/EditRoad';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(4),
        width: 'auto',
        borderRadius: "10px",
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#ccc",
    borderRadius: "10px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: "10px  20px 10px 0",
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
        border: "1px solid #ccc",
        borderRadius: "10px",
        "&:focus": {
            border: "2px solid",
            borderColor: blue[600],
        }
    },
}));


InputSearchPrimary.propTypes = {

};

function InputSearchPrimary(props) {
    return (
        <div>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <ButtonIcon style={{position: 'absolute', top: "50%", right: "10px", transform:" translate(0, -50%)"}} sx={{bgcolor: "button.primary", width: "30px", height: "30px",  color: "text.secondary", "&:hover":{color: "text.hover"}}}>
                    <EditRoadIcon sx={{ fontSize: "18px"}}/>
                </ButtonIcon>
            </Search>
        </div>
    );
}

export default InputSearchPrimary;