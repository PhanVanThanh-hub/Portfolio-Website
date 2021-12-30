import React from 'react';
import Divider from '@mui/material/Divider';

DividerCustom.propTypes = {
    
};

function DividerCustom(props) {
    return (
        <div>
            <Divider {...props} sx={{opacity: 0.6, marginTop: "5px"}}/>
        </div>
    );
}

export default DividerCustom;