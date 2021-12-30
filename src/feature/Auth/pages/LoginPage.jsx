import Grid from '@mui/material/Grid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../AuthSlice';
import Login from '../components/Login';

LoginPage.propTypes = {

};

function LoginPage(props) {
    const dispatch = useDispatch()

    const onSubmit = async (values) => {
        try {
            const actions = login(values)
            await dispatch(actions)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{height:"100vh",background:"linear-gradient(90deg,#755bea, #ff72c0)"}}>
            <Grid container justifyContent="center" alignItems="center" sx={{height:"100%",width:"100%"}}  >
                <Grid item xs={4} sx={{backgroundColor:"#fff" ,borderRadius:"12px",height:"60%"}} >
                    <Login onSubmit={onSubmit} />
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginPage;