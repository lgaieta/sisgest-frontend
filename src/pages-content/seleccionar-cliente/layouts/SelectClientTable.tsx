import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';

type SelectClientProps = {
    clients: string[];
    onRowClick: (client: string) => void;
};

function SelectClientTable(props: SelectClientProps) {
    const { clients, onRowClick } = props;

    return (
        <TableContainer component={Paper} variant='outlined'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Empresa</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client => (
                        <TableRow
                            sx={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                                '&:hover': { bgcolor: '#F3F3F3' },
                            }}
                            onClick={() => onRowClick(client)}
                            key={client}
                        >
                            <TableCell>{client}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SelectClientTable;
