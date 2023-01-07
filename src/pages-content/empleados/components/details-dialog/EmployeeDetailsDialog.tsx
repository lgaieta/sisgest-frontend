import {
    Dialog,
    DialogTitle,
    Typography,
    DialogContent,
    Box,
    DialogActions,
    Button,
    TextField,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Employee from '../../../../entities/Employee.entity';
import DetailsDialogStyles from './EmployeeDetailsDialog.styles';

type EmployeeDetailsDialogProps = {
    isOpen: boolean;
    employee: Employee | null;
    tags: [string, keyof Employee][];
    onEditButtonClick?: () => void;
    onDeleteButtonClick: (id: Employee['id']) => void;
    onCloseButtonClick: () => void;
    onDialogClose: () => void;
    onFormSubmit: (employee: Employee) => void;
};

const { DetailsContainerStyles } = DetailsDialogStyles;

function EmployeeDetailsDialog(props: EmployeeDetailsDialogProps) {
    const {
        isOpen,
        onEditButtonClick = null,
        onDeleteButtonClick,
        onCloseButtonClick,
        onDialogClose,
        onFormSubmit,
        employee,
        tags,
    } = props;

    const { register, handleSubmit } = useForm<typeof employee>();
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const editInputRef = useRef(null);

    if (!employee) return null;

    return (
        <Dialog open={isOpen} onClose={onDialogClose} fullWidth maxWidth='md'>
            <form onSubmit={handleSubmit(data => onFormSubmit({ ...employee, ...data }))}>
                <DialogTitle>
                    <Typography variant='h4' sx={{ fontWeight: '700' }}>
                        {employee.names}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Box sx={DetailsContainerStyles}>
                        {tags.map(([tag, key]) => (
                            <Box key={tag}>
                                <Typography
                                    variant='subtitle1'
                                    sx={{ fontWeight: '700' }}
                                >
                                    {tag}
                                </Typography>
                                {isEditable ? (
                                    <TextField
                                        type='text'
                                        size='small'
                                        defaultValue={employee[key]}
                                        hiddenLabel
                                        {...register(key)}
                                    />
                                ) : (
                                    <Typography variant='body1'>
                                        {employee[key]}
                                    </Typography>
                                )}
                            </Box>
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='outlined'
                        onClick={() => {
                            if (onEditButtonClick) onEditButtonClick();
                            if (isEditable) editInputRef?.current.click();
                            setIsEditable(prev => !prev);
                        }}
                    >
                        {isEditable ? 'Guardar' : 'Editar'}
                    </Button>
                    <input type='submit' style={{ display: 'none' }} ref={editInputRef} />
                    <Button
                        variant='outlined'
                        color='error'
                        onClick={() => onDeleteButtonClick(employee.id)}
                    >
                        Borrar
                    </Button>
                    <Button onClick={onCloseButtonClick}>Cerrar</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default EmployeeDetailsDialog;
