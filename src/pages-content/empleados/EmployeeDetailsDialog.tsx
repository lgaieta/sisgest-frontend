import {
    Dialog,
    DialogTitle,
    Typography,
    DialogContent,
    Box,
    DialogActions,
    Button,
} from '@mui/material';
import Employee from '../../entities/Employee.entity';

type EmployeeDetailsDialogProps = {
    isOpen: boolean;
    employee: Employee | null;
    onEditButtonClick: () => void;
    onDeleteButtonClick: (id: Employee['id']) => void;
    onCloseButtonClick: () => void;
    onDialogClose: () => void;
};

function EmployeeDetailsDialog(props: EmployeeDetailsDialogProps) {
    const {
        isOpen,
        onEditButtonClick,
        onDeleteButtonClick,
        onCloseButtonClick,
        onDialogClose,
        employee,
    } = props;

    if (!employee) return null;

    return (
        <Dialog open={isOpen} onClose={onDialogClose} fullWidth maxWidth='md'>
            <DialogTitle>
                <Typography variant='h4' sx={{ fontWeight: '700' }}>
                    {employee.names}
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',
                        gridAutoRows: 'auto',
                        width: '100%',
                    }}
                >
                    <Box>
                        <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
                            Nombres
                        </Typography>
                        <Typography variant='body1'>{employee.names}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
                            Apellidos
                        </Typography>
                        <Typography variant='body1'>{employee.surnames}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
                            Cliente
                        </Typography>
                        <Typography variant='body1'>{employee.surnames}</Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={onEditButtonClick}>
                    Editar
                </Button>
                <Button
                    variant='outlined'
                    color='error'
                    onClick={() => onDeleteButtonClick(employee.id)}
                >
                    Borrar
                </Button>
                <Button onClick={onCloseButtonClick}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EmployeeDetailsDialog;
