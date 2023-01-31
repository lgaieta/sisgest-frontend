import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MenuItem } from '@mui/material';
import { z } from 'zod';
import {
    CreateContractReturnButton,
    CreateContractContinueButton,
} from '../../components/CreateContractButton';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import CreateContractSelect from '../../components/CreateContractSelect';
import {
    CreateContractTextField,
    CreateContractNumberField,
} from '../../components/CreateContractField';
import { stringValidateSchema, numberValidateSchema } from '../../utils/InputSchemas';
import { StepFormProps } from '../CreateContractForm';

const schema = z.object({
    formaContrato: stringValidateSchema,
    periodoPrueba: numberValidateSchema,
    observacionesFormaContrato: stringValidateSchema,
});

type FormValues = z.infer<typeof schema>;

function FormaDeContratoForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { control, handleSubmit } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Forma de Contrato</CreateContractDivider>
                <CreateContractSelect<FormValues>
                    name='formaContrato'
                    control={control}
                    label='Forma de Contrato'
                    labelId='FormaDeContratoLabel'
                    defaultValue='1'
                    autoFocus
                >
                    <MenuItem value='1'>Opcion 1</MenuItem>
                </CreateContractSelect>
                <CreateContractNumberField<FormValues>
                    name='periodoPrueba'
                    control={control}
                    type='number'
                    label='Período de Prueba (en días)'
                    defaultValue={1}
                />
                <CreateContractTextField<FormValues>
                    name='observacionesFormaContrato'
                    control={control}
                    label='Observaciones'
                    gridProps={{ lg: 2 }}
                    defaultValue='1'
                />
                <CreateContractButtonsContainer>
                    <CreateContractReturnButton onClick={onReturnButtonClick}>
                        Volver
                    </CreateContractReturnButton>
                    <CreateContractContinueButton>Continuar</CreateContractContinueButton>
                </CreateContractButtonsContainer>
            </CreateContractContainer>
        </form>
    );
}

export default FormaDeContratoForm;
