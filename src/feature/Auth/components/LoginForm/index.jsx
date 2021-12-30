import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField/index';
import PasswordField from '../../../../components/form-control/PasswordField/index';
import Typography from '@mui/material/Typography';


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {

    const { onSubmit  } = props

    const schema = yup.object().shape({
        username: yup.string().required("Xin vui lòng nhập username"),
        password: yup.string().required("Xin vui lòng nhập mật khẩu")
    });

    const form = useForm({
        defaultValue: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log("value:",values)
        if (onSubmit) {
            onSubmit(values)
        }
    }

    
    return (
        <div style={{width: "100%"}}>
            <form initialValues={{ remember: true }} onSubmit={form.handleSubmit(handleSubmit)}>
                <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                    <Grid item xs={12} sx={{width:"100%"}}>
                        <InputField form={form} name="username" label="Username" />
                    </Grid>
                    <Grid item xs={12} sx={{width:"100%"}}>
                        <PasswordField form={form} name="password" label="Password" />
                    </Grid>
                    <Grid item xs={12} sx={{width:"100%"}}>
                        <Button type="primary" shape="round"  
                            sx={{ width: "100%",borderRadius:"35px",
                            background: "linear-gradient(90deg, #0162c8, #55e7fc)"}}
                        >
                            <Typography sx={{color:"white",fontWeight:"bold"}}>Login</Typography> 
                        </Button>
                    </Grid>
                </Grid>
                
            </form>
        </div>
    );
}

export default LoginForm;