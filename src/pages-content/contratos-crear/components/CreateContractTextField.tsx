import { Grid, TextField, TextFieldProps, GridProps } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

type CreateContractTextFieldProps = TextFieldProps &
    UseControllerProps<Partial<Contract>> & {
        gridProps?: GridProps;
        autoFocus?: boolean;
    };

function CreateContractTextField(props: CreateContractTextFieldProps) {
    const {
        name,
        control,
        gridProps,
        defaultValue = '',
        autoFocus = false,
        ...restProps
    } = props;
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue,
    });
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus && inputRef.current !== null) inputRef.current.focus();
    }, [autoFocus]);

    return (
        <Grid item xs={2} lg={1} {...gridProps}>
            <TextField
                sx={{ width: '100%' }}
                variant='filled'
                error={!!error}
                helperText={error?.message || null}
                {...field}
                inputRef={inputRef}
                onChange={
                    restProps.type === 'number'
                        ? event => field.onChange(+event.target.value)
                        : field.onChange
                }
                {...restProps}
            />
        </Grid>
    );
}

export default CreateContractTextField;
