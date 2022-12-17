import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Employee from '../../entities/Employee.entity';

type EmployeesTableProps = {
    employees: Employee[];
    onDeleteEmployee: (id: Employee['id']) => void;
    onRowClick: (employee: Employee) => void;
};

function EmployeesTable(props: EmployeesTableProps) {
    const { employees, onDeleteEmployee, onRowClick } = props;

    return (
        <TableContainer component={Paper} variant='outlined'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombres</TableCell>
                        <TableCell>Apellidos</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => (
                        <TableRow key={employee.id} onClick={() => onRowClick(employee)}>
                            <TableCell>{employee.names}</TableCell>
                            <TableCell>{employee.surnames}</TableCell>
                            <TableCell>
                                <Tooltip title='Borrar'>
                                    <DeleteIcon
                                        onClick={() => onDeleteEmployee(employee.id)}
                                    />
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeesTable;
