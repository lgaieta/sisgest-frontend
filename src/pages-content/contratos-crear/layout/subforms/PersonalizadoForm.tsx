import {
    CreateContractReturnButton,
    CreateContractContinueButton,
} from '../../components/CreateContractButton';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import CreateContractTextField from '../../components/CreateContractTextField';
import { StepFormProps } from '../CreateContractForm';
import { stringValidateSchema } from '../../utils/InputSchemas';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
    camposAMano: stringValidateSchema,
    observacionesCamposAMano: stringValidateSchema,
});

type FormInputs = z.infer<typeof schema>;

function PersonalizadoForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Carga de Campos a Mano</CreateContractDivider>
                <CreateContractTextField
                    name='camposAMano'
                    control={control}
                    label='Cargo'
                    autoFocus
                />
                <CreateContractTextField
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
