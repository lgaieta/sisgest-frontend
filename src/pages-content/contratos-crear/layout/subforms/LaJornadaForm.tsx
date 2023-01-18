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
import CreateContractTextField from '../../components/CreateContractTextField';
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

type FormInputs = z.infer<typeof schema>;

function LaJornadaForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormInputs>({
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
                <CreateContractTextField
                    name='horarioMañanaDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractTextField
                    name='horarioMañanaHasta'
                    control={control}
                    label='Hasta'
                    type='number'
                />
                <CreateContractDivider>Horario por la tarde</CreateContractDivider>
                <CreateContractTextField
                    name='horarioTardeDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractTextField
                    name='horarioTardeHasta'
                    control={control}
                    label='Hasta'
                    type='number'
                />
                <CreateContractDivider>Horario los sábados</CreateContractDivider>
                <CreateContractTextField
                    name='horarioSabadosDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractTextField
                    name='horarioSabadosHasta'
                    control={control}
                    label='Hasta'
                    type='number'
                />
                <CreateContractDivider>Horario los domingos</CreateContractDivider>
                <CreateContractTextField
                    name='horarioDomingosDesde'
                    control={control}
                    label='Desde'
                    type='number'
                />
                <CreateContractTextField
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
