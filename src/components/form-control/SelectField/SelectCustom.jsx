import React,{useState,useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Controller } from "react-hook-form";
import productApi from '../../../api/productApi';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

 

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectChip(props) {
   const theme = useTheme();
   const [personName, setPersonName] = useState(props.tech);
   const { form, name, label, disabled } = props;
   const { formState: { errors }, setValue } = form
   const [names,setNames] = useState([])
   useEffect(() => {
      ; (async () => {
         try {
            const tech1=[]
            const res = await productApi.getTechAll()
            res.data.map((tech,index)=>tech1.push(tech["tech"]))
            setNames(tech1)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   const handleChange = (event) => {
      const {
         target: { value },
      } = event;
      setPersonName(
         typeof value === 'string' ? value.split(',') : value,
      );
      setValue(name,value)
   };
   


return (
      <Controller
         control={form.control}
         name={name}
         render={({ field }) => (
            <>
               <FormControl sx={{ m: 1, width: 300 }}>
                  <Select
                     labelId="demo-multiple-chip-label"
                     id="demo-multiple-chip"
                     multiple
                     value={personName}
                     onChange={handleChange}
                     input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                     renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                           <Chip key={value}   label={value} />
                        ))}
                        </Box>
                     )}
                     MenuProps={MenuProps}
                     
                  >
                     {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </>
        )}
          
             
      />
          
     
   );
}