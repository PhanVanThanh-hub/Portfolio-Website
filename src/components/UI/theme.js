import { React } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey, deepPurple } from '@mui/material/colors';
import { useSelector } from 'react-redux';

export default function ToggleColorMode(props) {

    const mode = useSelector(state => state.mode.mode)

    const theme = createTheme({
      palette: {
         mode,
         ...(mode === "dark"
                ? {
                    background: {
                        default: "black",
                        secondary: "red",

                    }
                }
                : {
                    background: {
                        default: "white",
                        secondary: "red",
                    }
                }),
            text: {
                ...(mode === "dark"
                    ? {
                        primary: "#ffffff",
                        secondary: deepPurple[800],
                        hover: deepPurple[100],
                    }
                    : {
                        primary: grey[800],
                        secondary: grey[800],
                        hover: deepPurple[100],
                    }
                )
            },
            card:{
                ...(mode==="dark")?{
                    primary:"rgba(4, 6, 64, 0.8)"
                }
                :{
                    primary:"rgba(235, 211, 223, 0.8)"
                }
            },
             

       
          
            
        },
    })

   return (
      <ThemeProvider theme={theme}>
         {props.children}
      </ThemeProvider>
    );
}