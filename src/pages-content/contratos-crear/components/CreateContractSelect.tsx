import {
    Grid,
    Select,
    GridProps,
    SelectProps,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material';
import { useEffect, useRef } from 'react';
import { Path, PathValue, useController, UseControllerProps } from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

type CreateContractSelectProps<Fields extends Partial<Contract>> = SelectProps &
    UseControllerProps<Fields> & {
        gridProps?: GridProps;
        autoFocus?: boolean;
    };

function CreateContractSelect<Fields extends Partial<Contract>>(
    props: CreateContractSelectProps<Fields>
) {
    const {
        gridProps,
        children,
        name,
        control,
        defaultValue,
        autoFocus = false,
        ...restProps
    } = props;
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: defaultValue || ('' as PathValue<Fields, Path<Fields>>),
    });
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus && inputRef.current !== null) inputRef.current.focus();
    }, [autoFocus]);

    return (
        <Grid item xs={2} lg={1} {...gridProps}>
            <FormControl error={!!error} variant='filled' fullWidth>
                <InputLabel id={restProps.labelId}>{restProps.label}</InputLabel>
                <Select variant='filled' {...field} inputRef={inputRef} {...restProps}>
                    {children}
                </Select>
                {error?.message && <FormHelperText>{error.message}</FormHelperText>}
            </FormControl>
        </Grid>
    );
}

export default CreateContractSelect;
