import { Stack, Stepper, Step, StepLabel } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import Contract from '../../../entities/Contract.entity';
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
    const [contract, setContract] = useState<Partial<Contract>>({});

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
                    if (activeStep === 7) console.log('Push', contract);
                }}
                onReturnButtonClick={() => setActiveStep(prev => prev - 1)}
            />
        </Stack>
    );
}

export default CreateContractForm;
