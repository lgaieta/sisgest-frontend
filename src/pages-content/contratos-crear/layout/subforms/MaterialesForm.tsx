import {
    CreateContractReturnButton,
    CreateContractContinueButton,
} from '../../components/CreateContractButton';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import CreateContractTextField from '../../components/CreateContractTextField';
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

type FormInputs = z.infer<typeof schema>;

function MaterialesForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>
                    Materiales Proporcionados por el EMPLEADOR
                </CreateContractDivider>
                <CreateContractTextField
                    type='number'
                    name='cantidadMaterialesEmpleador'
                    control={control}
                    label='Cantidad'
                />
                <CreateContractTextField
                    name='calidadMaterialesEmpleador'
                    control={control}
                    label='Calidad'
                />
                <CreateContractTextField
                    name='estadoYCondicionesDeEntregaMaterialesEmpleador'
                    control={control}
                    label='Estado y Condiciones de Entrega'
                />
                <CreateContractTextField
                    name='observacionesMaterialesEmpleador'
                    control={control}
                    label='Observaciones '
                />
                <CreateContractDivider>
                    Materiales Propios del TRABAJADOR
                </CreateContractDivider>
                <CreateContractTextField
                    type='number'
                    name='cantidadMaterialesTrabajador'
                    control={control}
                    label='Cantidad'
                    gridProps={{ lg: 0.5 }}
                />
                <CreateContractTextField
                    name='calidadMaterialesTrabajador'
                    control={control}
                    label='Calidad'
                    gridProps={{ lg: 1 }}
                />
                <CreateContractTextField
                    type='number'
                    name='comisionMaterialesTrabajador'
                    control={control}
                    label='% Comisión'
                    gridProps={{ lg: 0.5 }}
                />
                <CreateContractTextField
                    name='estadoYCondicionesDeEntregaMaterialesTrabajador'
                    control={control}
                    label='Estado y Condiciones de Entrega '
                />
                <CreateContractTextField
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
