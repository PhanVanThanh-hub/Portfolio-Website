import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import clsx from 'clsx';
import {makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: "10px 0",
    },
}));

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
    label: "",
    disabled: false,
}

function PasswordField(props) {
    const classes = useStyles();
    const { form, name, label,disabled } = props;

    const { formState: { errors } } = form
    const hasError = errors[name]

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState, }) => {
                    return (
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password" error={!!hasError}>{label}</InputLabel>
                            <OutlinedInput
                                onBlur={onBlur}
                                onChange={onChange}
                                inputRef={ref}
                                fullWidth
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                disabled={disabled}
                                error={!!hasError}
                                labelWidth={70}
                            />
                        </FormControl>
                    )
                }}
            />
            <FormHelperText style={{ color: "red"}}>
                {errors[name]?.message}
            </FormHelperText>
        </div>
    );
}

export default PasswordField;