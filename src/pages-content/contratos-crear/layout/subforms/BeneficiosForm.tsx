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
    alimentacionGs: stringValidateSchema,
    habilitacionGs: stringValidateSchema,
    uniformeGs: stringValidateSchema,
});

type FormInputs = z.infer<typeof schema>;

function BeneficiosForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Beneficios Adicionales</CreateContractDivider>
                <CreateContractTextField
                    name='alimentacionGs'
                    control={control}
                    label='Alimentación Gs.'
                    autoFocus
                />
                <CreateContractTextField
                    name='habilitacionGs'
                    control={control}
                    label='Habilitación Gs.'
                />
                <CreateContractTextField
                    name='uniformeGs'
                    control={control}
                    label='Uniforme Gs.'
                    gridProps={{ lg: 2 }}
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

export default BeneficiosForm;
