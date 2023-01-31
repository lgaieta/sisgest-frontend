import { Grid, TextField, TextFieldProps, GridProps } from '@mui/material';
import { ChangeEvent, useEffect, useRef } from 'react';
import {
    useController,
    UseControllerProps,
    Path,
    ControllerRenderProps,
    PathValue,
} from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

type CreateContractFieldProps<Fields extends Partial<Contract>> = Omit<
    TextFieldProps,
    'variant'
> &
    UseControllerProps<Fields> & {
        gridProps?: GridProps;
        autoFocus?: boolean;
        customOnChange?: (
            event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            field: ControllerRenderProps<Fields, Path<Fields>>
        ) => void;
        customValue?: (
            field: ControllerRenderProps<Fields, Path<Fields>>
        ) => string | undefined;
        defaultValue: unknown;
    };

export function CreateContractField<Fields extends Partial<Contract>>(
    props: CreateContractFieldProps<Fields>
) {
    const {
        name,
        control,
        gridProps,
        defaultValue,
        customOnChange,
        customValue,
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
                value={customValue ? customValue(field) : field.value}
                onChange={e =>
                    customOnChange ? customOnChange(e, field) : field.onChange(e)
                }
                {...restProps}
            />
        </Grid>
    );
}

export const CreateContractTextField = <Fields extends Partial<Contract>>(
    props: Omit<CreateContractFieldProps<Fields>, 'defaultValue'> &
        Partial<Pick<CreateContractFieldProps<Fields>, 'defaultValue'>>
) => {
    return (
        <CreateContractField
            type='text'
            {...props}
            defaultValue={props.defaultValue || ('' as PathValue<Fields, Path<Fields>>)}
        />
    );
};

export const CreateContractNumberField = <Fields extends Partial<Contract>>(
    props: Omit<CreateContractFieldProps<Fields>, 'defaultValue'> &
        Partial<Pick<CreateContractFieldProps<Fields>, 'defaultValue'>>
) => {
    return (
        <CreateContractField
            type='number'
            customValue={field =>
                field.value === 0 || field.value === undefined || field.value === null
                    ? ''
                    : field.value.toString()
            }
            customOnChange={(event, field) => field.onChange(+event.target.value)}
            {...props}
            defaultValue={props.defaultValue || (0 as PathValue<Fields, Path<Fields>>)}
        />
    );
};

// const {
//     name,
//     control,
//     gridProps,
//     defaultValue,
//     autoFocus = false,
//     ...restProps
// } = props;
// const {
//     field,
//     fieldState: { error },
// } = useController({
//     name,
//     control,
//     defaultValue,
// });
// const inputRef = useRef<HTMLInputElement>(null);

// useEffect(() => {
//     if (autoFocus && inputRef.current !== null) inputRef.current.focus();
// }, [autoFocus]);

// return (
//     <Grid item xs={2} lg={1} {...gridProps}>
//         <TextField
//             sx={{ width: '100%' }}
//             variant='filled'
//             error={!!error}
//             helperText={error?.message || null}
//             {...field}
//             inputRef={inputRef}
//             onChange={
//                 restProps.type === 'number'
//                     ? event => field.onChange(+event.target.value)
//                     : field.onChange
//             }
//             {...restProps}
//         />
//     </Grid>
// );
