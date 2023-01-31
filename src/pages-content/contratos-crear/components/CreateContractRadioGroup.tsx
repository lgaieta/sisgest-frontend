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
import { UseControllerProps, useController, PathValue, Path } from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

type CreateContractRadioGroupProps<Fields extends Partial<Contract>> = RadioGroupProps &
    UseControllerProps<Fields> & {
        formControlProps?: FormControlProps;
        gridProps?: GridProps;
    };

function CreateContractRadioGroup<Fields extends Partial<Contract>>({
    children,
    gridProps,
    formControlProps,
    name,
    control,
    defaultValue,
    ...props
}: CreateContractRadioGroupProps<Fields>) {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: defaultValue || ('' as PathValue<Fields, Path<Fields>>),
    });

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
