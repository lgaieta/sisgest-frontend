import {
    Grid,
    Select,
    GridProps,
    SelectProps,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

type CreateContractSelectProps = SelectProps &
    UseControllerProps<Partial<Contract>> & {
        gridProps?: GridProps;
    };

function CreateContractSelect(props: CreateContractSelectProps) {
    const { gridProps, children, name, control, defaultValue = '', ...restProps } = props;
    const {
        field,
        fieldState: { error },
    } = useController({ name, control, defaultValue });

    return (
        <Grid item xs={2} lg={1} {...gridProps}>
            <FormControl error={!!error} variant='filled' fullWidth>
                <InputLabel id={restProps.labelId}>{restProps.label}</InputLabel>
                <Select variant='filled' {...field} {...restProps}>
                    {children}
                </Select>
                {error?.message && <FormHelperText>{error.message}</FormHelperText>}
            </FormControl>
        </Grid>
    );
}

export default CreateContractSelect;
