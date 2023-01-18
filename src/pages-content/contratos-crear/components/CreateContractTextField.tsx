import { Grid, TextField, TextFieldProps, GridProps } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

type CreateContractTextFieldProps = Omit<TextFieldProps, 'ref'> &
    UseControllerProps<Partial<Contract>> & {
        gridProps?: GridProps;
    };

function CreateContractTextField(props: CreateContractTextFieldProps) {
    const { name, control, gridProps, defaultValue = '', ...restProps } = props;
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue,
    });

    return (
        <Grid item xs={2} lg={1} {...gridProps}>
            <TextField
                sx={{ width: '100%' }}
                variant='filled'
                error={!!error}
                helperText={error?.message || null}
                {...field}
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
