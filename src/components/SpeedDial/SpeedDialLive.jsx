import * as React from 'react';
import Box from '@mui/material/Box';
import { deepPurple } from '@mui/material/colors';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';


const useStyles = makeStyles(() => ({
    root: {
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: "absolute",
        top: "40%",
        right: "0",
        zIndex: 1001,
    },
    content: {
        width: "50px",
        height: "50px",
        backgroundColor: deepPurple[600],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50% 50% 0 50%",
    },
}))



SpeedDialLive.propTypes = {

};

function SpeedDialLive(props) {
    const {onClick} = props
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.root}>
                <Box className={classes.content} >
                    <IconButton onClick={()=>{onClick()}}>
                        <SettingsOutlinedIcon style={{ color: "#fff" }} className="spin" />
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
}

export default SpeedDialLive;