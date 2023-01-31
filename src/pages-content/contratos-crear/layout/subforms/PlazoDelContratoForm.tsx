import {
    CreateContractReturnButton,
    CreateContractContinueButton,
} from '../../components/CreateContractButton';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import CreateContractRadioGroup, {
    CreateContractRadioItem,
} from '../../components/CreateContractRadioGroup';
import CreateContractSelect from '../../components/CreateContractSelect';
import { StepFormProps } from '../CreateContractForm';
import { stringValidateSchema } from '../../utils/InputSchemas';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MenuItem } from '@mui/material';

const schema = z.object({
    plazoContrato: stringValidateSchema,
    fechaInicioTareas: stringValidateSchema,
    fechaIngresoEmpresa: stringValidateSchema,
});

type FormValues = z.infer<typeof schema>;

function PlazoDelContratoForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Plazo del Contrato</CreateContractDivider>
                <CreateContractRadioGroup name='plazoContrato' control={control}>
                    <CreateContractRadioItem value='Indefinido' label='Indefinido' />
                    <CreateContractRadioItem
                        value='Determinado o fijo'
                        label='Determinado o fijo'
                    />
                    <CreateContractRadioItem
                        value='Obras o Servicios Determinados'
                        label='Obras o Servicios Determinados'
                    />
                </CreateContractRadioGroup>
                <CreateContractDivider>Fechas</CreateContractDivider>
                <CreateContractSelect<FormValues>
                    name='fechaInicioTareas'
                    control={control}
                    label='Fecha de Inicio de Tareas'
                    labelId='FechaDeInicioDeTareasLabel'
                >
                    <MenuItem value='1'>Opcion 1</MenuItem>
                </CreateContractSelect>
                <CreateContractSelect<FormValues>
                    name='fechaIngresoEmpresa'
                    control={control}
                    label='Fecha de ingreso a la empresa'
                    labelId='FechaDeIngresoALaEmpresaLabel'
                >
                    <MenuItem value='1'>Opcion 1</MenuItem>
                </CreateContractSelect>
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

export default PlazoDelContratoForm;
