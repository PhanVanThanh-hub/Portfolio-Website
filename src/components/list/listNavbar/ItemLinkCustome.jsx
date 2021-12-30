import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useHistory,useRouteMatch } from "react-router-dom";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        display: "flex",
        flexWrap: "no-wrap",
        alignItems: 'center',
        justifyContent: "start",
        paddingRight:" 16px",
        paddingLeft: "20px",
        paddingTop: "8px",
        paddingBottom: "8px",
        width: "100%",
    }
}))

ItemLinkCustome.propTypes = {

}


function ItemLinkCustome(props) {
    const classes = useStyles()
    const match = useRouteMatch()
    const history = useHistory()
    const [location,setLocation] = useState("")
    useEffect(() => {
        setLocation(history.location.pathname)
    }, [history,match])
    const { to, ...orther } = props
    return (
        <>
            <ListItemButton
                sx={{
                    ...props.sx,
                    borderRadius: "12px!important",
                    marginBottom: "5px",
                    padding: 0,
                    "&:hover": { bgcolor: "button.hover" },
                    bgcolor: location === to && "button.hover"
                }} {...orther}>
                <RouterLink to={to ? to : ""} className={classes.link} underline="none" color="inherit">
                    <ListItemIcon sx={{ color: "icon.primary" }}>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.title} sx={{ color: "text.primary" }} />
                </RouterLink>
            </ListItemButton>
        </>
    );
}

export default ItemLinkCustome;