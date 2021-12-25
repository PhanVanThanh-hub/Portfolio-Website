import React from 'react';
import { Controller } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
 




InputField.defaultProps = {
    label: "",
    disabled: false,
}

function InputField(props) {

    const { form, name, label, disabled } = props;
    const { formState: { errors } } = form
    const hasError = errors[name]

    return (
        <div style={{ margin: "10px 0" }}>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState, }) => {
                    return (
                        <TextField
                        variant="standard"
                            onBlur={onBlur}
                            onChange={onChange}
                            inputRef={ref}
                            sx={{width:"50%"}}
                          
                            label={label}
                            error={!!hasError}
                            disabled={disabled}
                        />
                    )
                }}
            />
            <FormHelperText error={!!hasError}>
                {errors[name]?.message}
            </FormHelperText>
        </div>
    );
}

export default InputField;