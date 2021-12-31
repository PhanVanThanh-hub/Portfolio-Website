import  React ,{useState} from 'react';
 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function DesIntro() {
   const [valueDes,setValue] = useState("")
   const handleChange =(e)=>{
      setValue(e.target.value)
   }
   const handleClick =()=>{
      console.log("des:",valueDes)
   }
   return (
      <div>
         <TextField
         variant="outlined"
         multiline
         fullWidth
         label="Des"
         onChange={handleChange}
         value={valueDes}
         inputProps={{
            style: {
              height:"100px",
               
            },
        }}/>
         <Button variant="contained" onClick={handleClick}
            sx={{fontWeight:"bold",borderRadius:"12px",marginTop:"16px",background:"linear-gradient(90deg, #0162c8, #55e7fc)",
            color:"black"}}
         >
            Confirm
         </Button>
      </div>
   );
}
