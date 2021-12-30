import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ListDrawer from "./ListDrawer";
import Header from "./Header";
import { makeStyles } from '@mui/styles';
import SpeedDialLive from "../components/SpeedDial/SpeedDialLive";


const useStyles = makeStyles(() => ({
    main: {

    }
}))

const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        })
    })
);

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));

const DrawerContainer = (props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [openDrawerLive, setOpenDrawerLive] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: "flex", bgcolor: 'background.primary', color: 'text.primary', }}>
                <CssBaseline />
                <Header onClick={handleDrawer} />
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            bgcolor: 'background.primary',
                            top: "69px",
                            border: "none",
                            zIndex: 999,
                            padding: "30px 10px 100px 15px"
                        }
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <ListDrawer />
                </Drawer>
                <Main sx={{ padding: "20px 20px 0 0", bgcolor: 'background.primary', paddingLeft: !open&&"20px"}} open={open}>
                    <DrawerHeader />
                    <Box sx={{
                        bgcolor: 'background.default',
                        borderRadius: "20px 20px 0 0",
                        minHeight: "100vh",
                        padding: "20px"
                    }} className={classes.main}>
                        {props.children}
                    </Box>
                </Main>
            </Box>
       
        </>
    );
}

export default DrawerContainer