import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItem, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useHistory,useRouteMatch } from "react-router-dom";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        display: "flex",
        flexWrap: "no-wrap",
        alignItems: 'center',
        justifyContent: "start",
    }
}))

ListItemLinkSpanCustome.propTypes = {

}


function ListItemLinkSpanCustome(props) {
    const classes = useStyles()
    const { to, ...orther } = props
    const [open, setOpen] = React.useState(false);
    const history = useHistory()
    const match = useRouteMatch()
    const [location,setLocation] = useState("")

    useEffect(() => {
        setLocation(history.location.pathname)
    },[history, match])

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem
                sx={{
                    pl: 2, ...props.sx,
                    marginTop: "0",
                }}
                onClick={() => { props.children && handleClick() }}
                {...orther}
            >
                {!props.children && <RouterLink to={to ? to : ""} className={classes.link} underline="none" color="inherit">
                    <ListItemText
                        primary={
                            <Typography sx={{
                                display: "flex",
                                flexWrap: "no-wrap",
                                alignItems: 'center',
                                justifyContent: "start",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "text.secondary",
                                    fontWeight: "450",
                                },
                                color: location===to && "text.secondary",
                                fontWeight: location===to && "450",
                            }}>
                                <Box component="span" sx={{ height: "20px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point" width="26" height="20" viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                </Box>
                                {props.title}
                            </Typography>}
                        sx={{ color: "text.primary", ml: 1, }}
                    />
                </RouterLink>}
                {props.children && <>
                    <ListItemText
                        primary={
                            <Typography sx={{
                                display: "flex",
                                flexWrap: "no-wrap",
                                alignItems: 'center',
                                justifyContent: "start",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "text.secondary",
                                },
                                color: open && "text.secondary",
                                fontWeight: open && "450",
                            }}>
                                <Box component="span" sx={{ height: "20px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point" width="26" height="20" viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                </Box>
                                {props.title}
                            </Typography>}
                        sx={{ color: "text.primary", ml: 1, }}
                    />
                </>}
                {props.children ? open ? <ExpandLessIcon sx={{ cursor: "pointer", fontWeight:"100",fontSize: "18px" }} /> : <ExpandMoreIcon sx={{ cursor: "pointer", fontSize: "18px"}} /> : ""}
            </ListItem>
            {props.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.children}
                    </List>
                </Collapse>
            )}
        </>
    );
}

export default ListItemLinkSpanCustome;