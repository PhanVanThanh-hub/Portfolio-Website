import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

Login.propTypes = {
    onSubmit: PropTypes.func
};

function Login(props) {
    const { onSubmit ,setVisibleLogin } = props

    return (
        <Grid container  direction="column" justifyContent="center" alignItems="center"
           
        >
            <Grid item xs={12} sx={{marginTop:"16px"}}  >
                <Typography sx={{ fontSize: "30px",fontWeight:"bold" }}>Login</Typography>
            </Grid>
            <Grid item xs={12} sx={{margin:"16px",width:"90%"}}>
                <LoginForm setVisibleLogin={setVisibleLogin} onSubmit={onSubmit} />
            </Grid>
        </Grid>
    );
}

export default Login;