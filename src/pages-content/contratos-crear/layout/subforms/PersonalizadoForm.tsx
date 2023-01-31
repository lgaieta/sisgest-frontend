import {
    CreateContractReturnButton,
    CreateContractContinueButton,
} from '../../components/CreateContractButton';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import { CreateContractTextField } from '../../components/CreateContractField';
import { StepFormProps } from '../CreateContractForm';
import { stringValidateSchema } from '../../utils/InputSchemas';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
    camposAMano: stringValidateSchema,
    observacionesCamposAMano: stringValidateSchema,
});

type FormValues = z.infer<typeof schema>;

function PersonalizadoForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Carga de Campos a Mano</CreateContractDivider>
                <CreateContractTextField<FormValues>
                    name='camposAMano'
                    control={control}
                    label='Cargo'
                    autoFocus
                />
                <CreateContractTextField<FormValues>
                    name='observacionesCamposAMano'
                    control={control}
                    label='Observaciones'
                />
                <CreateContractButtonsContainer>
                    <CreateContractReturnButton onClick={onReturnButtonClick}>
                        Volver
                    </CreateContractReturnButton>
                    <CreateContractContinueButton>Crear</CreateContractContinueButton>
                </CreateContractButtonsContainer>
            </CreateContractContainer>
        </form>
    );
}

export default PersonalizadoForm;
