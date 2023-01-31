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
import { CreateContractNumberField } from '../../components/CreateContractField';
import { StepFormProps } from '../CreateContractForm';
import { stringValidateSchema, numberValidateSchema } from '../../utils/InputSchemas';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
    jornadaTrabajo: stringValidateSchema,
    horarioMañanaDesde: numberValidateSchema,
    horarioMañanaHasta: numberValidateSchema,
    horarioTardeDesde: numberValidateSchema,
    horarioTardeHasta: numberValidateSchema,
    horarioSabadosDesde: numberValidateSchema,
    horarioSabadosHasta: numberValidateSchema,
    horarioDomingosDesde: numberValidateSchema,
    horarioDomingosHasta: numberValidateSchema,
});

type FormValues = z.infer<typeof schema>;

function LaJornadaForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Jornada de Trabajo</CreateContractDivider>
                <CreateContractRadioGroup name='jornadaTrabajo' control={control}>
                    <CreateContractRadioItem label='Diurna' value='Diurna' />
                    <CreateContractRadioItem label='Mixta' value='Mixta' />
                    <CreateContractRadioItem label='Nocturna' value='Nocturna' />
                    <CreateContractRadioItem label='Intercalada' value='Intercalada' />
                </CreateContractRadioGroup>

                <CreateContractDivider>Horario por la mañana</CreateContractDivider>
                <CreateContractNumberField<FormValues>
                    name='horarioMañanaDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractNumberField<FormValues>
                    name='horarioMañanaHasta'
                    control={control}
                    label='Hasta'
                    type='number'
                />
                <CreateContractDivider>Horario por la tarde</CreateContractDivider>
                <CreateContractNumberField<FormValues>
                    name='horarioTardeDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractNumberField<FormValues>
                    name='horarioTardeHasta'
                    control={control}
                    label='Hasta'
                    type='number'
                />
                <CreateContractDivider>Horario los sábados</CreateContractDivider>
                <CreateContractNumberField<FormValues>
                    name='horarioSabadosDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractNumberField<FormValues>
                    name='horarioSabadosHasta'
                    control={control}
                    label='Hasta'
                    type='number'
                />
                <CreateContractDivider>Horario los domingos</CreateContractDivider>
                <CreateContractNumberField<FormValues>
                    name='horarioDomingosDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractNumberField<FormValues>
                    name='horarioDomingosHasta'
                    control={control}
                    label='Hasta'
                    type='number'
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

export default LaJornadaForm;
