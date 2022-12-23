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
import Employee from '../../../entities/Employee.entity';

type EmployeesTableProps = {
    employees: Employee[];
    tags: [string, keyof Employee][];
    onDeleteEmployee: (id: Employee['id']) => void;
    onRowClick: (employee: Employee) => void;
};

function EmployeesTable(props: EmployeesTableProps) {
    const { employees, onDeleteEmployee, onRowClick, tags } = props;

    return (
        <TableContainer component={Paper} variant='outlined'>
            <Table>
                <TableHead>
                    <TableRow>
                        {tags.map(([tag]) => (
                            <TableCell key={tag}>{tag}</TableCell>
                        ))}
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => (
                        <TableRow
                            key={employee.id}
                            onClick={() => onRowClick(employee)}
                            sx={{
                                '&:hover': { bgcolor: '#F3F3F3' },
                            }}
                        >
                            {tags.map(([, key]) => (
                                <TableCell key={employee[key]}>{employee[key]}</TableCell>
                            ))}
                            <TableCell>
                                <Tooltip title='Borrar'>
                                    <DeleteIcon
                                        onClick={e => {
                                            e.stopPropagation();
                                            onDeleteEmployee(employee.id);
                                        }}
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
