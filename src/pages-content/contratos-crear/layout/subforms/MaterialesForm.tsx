import {
    CreateContractReturnButton,
    CreateContractContinueButton,
} from '../../components/CreateContractButton';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import {
    CreateContractTextField,
    CreateContractNumberField,
} from '../../components/CreateContractField';
import { StepFormProps } from '../CreateContractForm';
import { stringValidateSchema, numberValidateSchema } from '../../utils/InputSchemas';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
    cantidadMaterialesEmpleador: numberValidateSchema,
    calidadMaterialesEmpleador: stringValidateSchema,
    estadoYCondicionesDeEntregaMaterialesEmpleador: stringValidateSchema,
    observacionesMaterialesEmpleador: stringValidateSchema,
    cantidadMaterialesTrabajador: numberValidateSchema,
    calidadMaterialesTrabajador: stringValidateSchema,
    comisionMaterialesTrabajador: numberValidateSchema,
    estadoYCondicionesDeEntregaMaterialesTrabajador: stringValidateSchema,
    observacionesMaterialesTrabajador: stringValidateSchema,
});

type FormValues = z.infer<typeof schema>;

function MaterialesForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>
                    Materiales Proporcionados por el EMPLEADOR
                </CreateContractDivider>
                <CreateContractNumberField<FormValues>
                    type='number'
                    name='cantidadMaterialesEmpleador'
                    control={control}
                    label='Cantidad'
                    autoFocus
                />
                <CreateContractTextField<FormValues>
                    name='calidadMaterialesEmpleador'
                    control={control}
                    label='Calidad'
                />
                <CreateContractTextField<FormValues>
                    name='estadoYCondicionesDeEntregaMaterialesEmpleador'
                    control={control}
                    label='Estado y Condiciones de Entrega'
                />
                <CreateContractTextField<FormValues>
                    name='observacionesMaterialesEmpleador'
                    control={control}
                    label='Observaciones '
                />
                <CreateContractDivider>
                    Materiales Propios del TRABAJADOR
                </CreateContractDivider>
                <CreateContractNumberField<FormValues>
                    type='number'
                    name='cantidadMaterialesTrabajador'
                    control={control}
                    label='Cantidad'
                    gridProps={{ lg: 0.5 }}
                />
                <CreateContractTextField<FormValues>
                    name='calidadMaterialesTrabajador'
                    control={control}
                    label='Calidad'
                    gridProps={{ lg: 1 }}
                />
                <CreateContractNumberField<FormValues>
                    type='number'
                    name='comisionMaterialesTrabajador'
                    control={control}
                    label='% Comisión'
                    gridProps={{ lg: 0.5 }}
                />
                <CreateContractTextField<FormValues>
                    name='estadoYCondicionesDeEntregaMaterialesTrabajador'
                    control={control}
                    label='Estado y Condiciones de Entrega '
                />
                <CreateContractTextField<FormValues>
                    name='observacionesMaterialesTrabajador'
                    control={control}
                    label='Observaciones'
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

export default MaterialesForm;
