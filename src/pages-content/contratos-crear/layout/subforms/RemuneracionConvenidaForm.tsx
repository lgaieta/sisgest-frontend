import { StepFormProps } from '../CreateContractForm';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import CreateContractTextField from '../../components/CreateContractTextField';
import { useForm } from 'react-hook-form';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import { CreateContractContinueButton } from '../../components/CreateContractButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { numberValidateSchema, stringValidateSchema } from '../../utils/InputSchemas';

const schema = z.object({
    periodoOrdinarioPago: stringValidateSchema,
    fechaAsignada: stringValidateSchema,
    montoSueldoMensual: numberValidateSchema,
    diasCalculoJornal: numberValidateSchema,
    montoJornalDiario: numberValidateSchema,
    montoPorHora: numberValidateSchema,
});

type FormInputs = z.infer<typeof schema>;

function RemuneracionConvenidaForm(props: StepFormProps) {
    const { onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Fecha de Pago</CreateContractDivider>
                <CreateContractTextField
                    name='periodoOrdinarioPago'
                    control={control}
                    label='Periodo Ordinario de Pago'
                    defaultValue='1'
                />
                <CreateContractTextField
                    name='fechaAsignada'
                    control={control}
                    label='Fecha Asignada'
                    defaultValue='1'
                />
                <CreateContractDivider>Monto del Sueldo</CreateContractDivider>
                <CreateContractTextField
                    name='montoSueldoMensual'
                    control={control}
                    type='number'
                    label='Monto Sueldo Mensual'
                    defaultValue={1}
                />
                <CreateContractTextField
                    name='diasCalculoJornal'
                    control={control}
                    type='number'
                    label='Días para el Cálculo de Jornal'
                    defaultValue={1}
                />
                <CreateContractTextField
                    name='montoJornalDiario'
                    control={control}
                    type='number'
                    label='Monto Jornal Diario'
                    defaultValue={1}
                />
                <CreateContractTextField
                    name='montoPorHora'
                    control={control}
                    type='number'
                    label='Monto por hora'
                    defaultValue={1}
                />
                <CreateContractButtonsContainer>
                    <CreateContractContinueButton>Continuar</CreateContractContinueButton>
                </CreateContractButtonsContainer>
            </CreateContractContainer>
        </form>
    );
}

export default RemuneracionConvenidaForm;
