import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
import ViewListIcon from '@mui/icons-material/ViewList';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const actions = [
   { icon: <AccountCircleIcon />, name: 'Intro',id:"information" },
   { icon: <InfoIcon />, name: 'About',id:"about" },
   { icon: <QuizIcon />, name: 'FAQ' ,id:"faq"},
   { icon: <ViewListIcon />, name: 'List Product' ,id:"product"},
   { icon: <ContactMailIcon />, name: 'Contact' ,id:"contact"},
];

export default function BasicSpeedDial() {
   const GoPage =(page)=>{
      var scrollDiv = document.getElementById(page).offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});

   }
   return (
       
      <SpeedDial
         ariaLabel="SpeedDial basic example"
         sx={{ position: 'fixed', bottom: 16, right: 16 }}
         icon={<SpeedDialIcon />}
        
      >
         {actions.map((action) => (
            <SpeedDialAction
               key={action.name}
               icon={action.icon}
               tooltipTitle={action.name}
               onClick={e => {
                  e.stopPropagation();//from stackoverflow
                  GoPage(action.id);
                }}
            />
         ))}
      </SpeedDial>
 
   );
}
