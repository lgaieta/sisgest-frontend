import { Stack, Stepper, Step, StepLabel, Snackbar } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Contract from '../../../entities/Contract.entity';
import useCreateContract from '../hooks/useCreateContract';
import BeneficiosForm from './subforms/BeneficiosForm';
import FormaDeContratoForm from './subforms/FormaDeContratoForm';
import LaJornadaForm from './subforms/LaJornadaForm';
import MaterialesForm from './subforms/MaterialesForm';
import ModalidadesForm from './subforms/ModalidadesForm';
import PersonalizadoForm from './subforms/PersonalizadoForm';
import PlazoDelContratoForm from './subforms/PlazoDelContratoForm';
import RemuneracionConvenidaForm from './subforms/RemuneracionConvenidaForm';

export type StepFormProps = {
    onFormSubmit: (formData: Partial<Contract>) => void;
    onReturnButtonClick: () => void;
};

const steps: [string, FC<StepFormProps>][] = [
    ['Remuneración Convenida', RemuneracionConvenidaForm],
    ['Modalidades', ModalidadesForm],
    ['Forma de Contrato', FormaDeContratoForm],
    ['Plazo del Contrato', PlazoDelContratoForm],
    ['La Jornada', LaJornadaForm],
    ['Beneficios', BeneficiosForm],
    ['Materiales', MaterialesForm],
    ['Personalizado', PersonalizadoForm],
];

function CreateContractForm() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [contract, setContract] = useState<Partial<Contract>>({ id_empleado: 10 });
    const { mutate: createContract } = useCreateContract({
        onMutate: () => setIsSnackbarOpen(true),
    });
    const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
    const router = useRouter();

    const StepForm = steps[activeStep][1];

    return (
        <Stack direction='row' gap={2} pt={2}>
            <Stepper
                activeStep={activeStep}
                orientation='vertical'
                sx={{ height: 'fit-content' }}
            >
                {steps.map(([step]) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <StepForm
                onFormSubmit={(formData: Partial<Contract>) => {
                    setContract(currentContract => ({ ...currentContract, ...formData }));
                    setActiveStep(prev => (prev < 7 ? prev + 1 : prev));
                    if (activeStep === 7)
                        createContract(contract as Contract, {
                            onSuccess: () => router.push('/contratos'),
                        });
                }}
                onReturnButtonClick={() => setActiveStep(prev => prev - 1)}
            />
            <Snackbar
                open={isSnackbarOpen}
                onClose={() => setIsSnackbarOpen(false)}
                message='Creando contrato...'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </Stack>
    );
}

export default CreateContractForm;
