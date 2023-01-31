import { StepFormProps } from '../CreateContractForm';
import CreateContractContainer from '../../components/CreateContractContainer';
import CreateContractDivider from '../../components/CreateContractDivider';
import {
    CreateContractContinueButton,
    CreateContractReturnButton,
} from '../../components/CreateContractButton';
import { CreateContractTextField } from '../../components/CreateContractField';
import CreateContractButtonsContainer from '../../components/CreateContractButtonsContainer';
import CreateContractSelect from '../../components/CreateContractSelect';
import { MenuItem } from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { stringValidateSchema } from '../../utils/InputSchemas';

const schema = z.object({
    claseTrabajoARealizar: stringValidateSchema,
    lugarPrestacion: stringValidateSchema,
    lugarPrestacionPersonalizado: z.optional(z.string()),
});

type FormValues = z.infer<typeof schema>;

function ModalidadesForm(props: StepFormProps) {
    const { onReturnButtonClick, onFormSubmit } = props;
    const { handleSubmit, control } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <CreateContractContainer>
                <CreateContractDivider>Modalidades</CreateContractDivider>
                <CreateContractSelect<FormValues>
                    name='claseTrabajoARealizar'
                    control={control}
                    label='Clase de Trabajo a Realizar'
                    labelId='ClaseDeTrabajoARealizarLabel'
                    defaultValue='1'
                    autoFocus
                >
                    <MenuItem value='1'>Opcion 1</MenuItem>
                </CreateContractSelect>
                <CreateContractSelect<FormValues>
                    name='lugarPrestacion'
                    control={control}
                    label='Lugar de Prestación'
                    labelId='LugarDePrestacionLabel'
                    defaultValue='1'
                >
                    <MenuItem value='1'>Opcion 1</MenuItem>
                </CreateContractSelect>
                <CreateContractTextField<FormValues>
                    name='lugarPrestacionPersonalizado'
                    control={control}
                    label='Lugar de Prestación Personalizado'
                    defaultValue='1'
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

export default ModalidadesForm;
