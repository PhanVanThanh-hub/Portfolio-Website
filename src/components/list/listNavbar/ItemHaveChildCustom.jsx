import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { blue } from '@mui/material/colors';
import { Typography } from '@mui/material';


const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
}));

ItemHaveChildCustom.propTypes = {

}


function ItemHaveChildCustom(props) {
    const { titleSecondary, ...orther } = props
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton
                sx={{
                    paddingLeft: "20px",
                    ...props.sx,
                    borderRadius: "12px!important",
                    marginBottom: "5px",
                    "&:hover": { bgcolor: "button.hover" },
                    bgcolor: open && "button.hover",
                }}
                onClick={handleClick} {...orther}>
                <ListItemIcon sx={{ color: "icon.primary" }}>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.title} sx={{ color: "text.primary" }} secondary={titleSecondary && <Typography sx={{color: "text.secondary", fontSize: "14px" }}>{titleSecondary}</Typography>} />
                {props.children ? open ? <ExpandLessIcon sx={{ fontSize: "18px" }} /> : <ExpandMoreIcon sx={{ fontSize: "18px" }} /> : ""}
            </ListItemButton>
            {props.children && (
                <>
                    <Grid container>
                        <Divider orientation="vertical" flexItem sx={{marginLeft:"30px", bgcolor: blue[50]}}/>
                        <Grid item xs>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {props.children}
                                </List>
                            </Collapse>
                        </Grid>
                    </Grid>
                </>

            )}
        </>
    );
}

export default ItemHaveChildCustom;