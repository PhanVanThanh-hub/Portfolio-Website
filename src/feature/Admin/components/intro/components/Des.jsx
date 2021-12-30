import  React ,{useRef} from 'react';
 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function DesIntro() {
   const textInput = useRef(null);
   const handleClick=()=> {
      textInput.current.focus();
      console.log("???:",textInput.current.focus())
    }
   return (
      <div>
         <TextField
         variant="outlined"
         
         ref={textInput} 
         multiline
         fullWidth
         label="Des"
         
         inputProps={{
            style: {
              height:"44px",
               
            },
        }}/>
         <Button variant="contained" onClick={handleClick}
            sx={{fontWeight:"bold",borderRadius:"12px",background:"linear-gradient(90deg, #0162c8, #55e7fc)",
            color:"black"}}
         >
            Choose
         </Button>
      </div>
   );
}
