import {
    FormControlProps,
    GridProps,
    Grid,
    FormControl,
    FormControlLabel,
    RadioGroup,
    RadioGroupProps,
    Radio,
    FormControlLabelProps,
    FormHelperText,
} from '@mui/material';
import { UseControllerProps, useController } from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

type CreateContractRadioGroupProps = RadioGroupProps &
    UseControllerProps<Partial<Contract>> & {
        formControlProps?: FormControlProps;
        gridProps?: GridProps;
    };

function CreateContractRadioGroup({
    children,
    gridProps,
    formControlProps,
    name,
    control,
    defaultValue,
    ...props
}: CreateContractRadioGroupProps) {
    const {
        field,
        fieldState: { error },
    } = useController({ name, control, defaultValue });

    return (
        <Grid item xs={2} {...gridProps}>
            <FormControl error={!!error} {...formControlProps}>
                <RadioGroup row {...field} {...props}>
                    {children}
                </RadioGroup>
                {error?.message && <FormHelperText>{error.message}</FormHelperText>}
            </FormControl>
        </Grid>
    );
}

export default CreateContractRadioGroup;

export function CreateContractRadioItem(props: Omit<FormControlLabelProps, 'control'>) {
    return <FormControlLabel control={<Radio />} {...props} />;
}
