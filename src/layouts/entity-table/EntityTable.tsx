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
import { ReactNode } from 'react';

type BaseEntity<PrimaryKey extends string | number | symbol> = Record<
    PrimaryKey,
    string | number
>;

type EntityTableProps<
    Entity extends BaseEntity<IdKey>,
    IdKey extends string | number | symbol
> = {
    entities: Entity[];
    tags: [string, keyof Entity][];
    onDeleteEntity: (entity: Entity) => void;
    onRowClick: (entity: Entity) => void;
    /** Name of primary key property */
    idKey: IdKey;
    footer?: ReactNode;
};

function EntityTable<
    Entity extends BaseEntity<IdKey>,
    IdKey extends string | number | symbol
>(props: EntityTableProps<Entity, IdKey>) {
    const { entities, onDeleteEntity, onRowClick, tags, idKey, footer } = props;

    return (
        <Paper
            variant='outlined'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem 0 1rem 1rem',
                height: '100%',
            }}
        >
            <TableContainer
                sx={{
                    borderRadius: footer ? '1rem 0 0 0' : '1rem',
                    height: '100%',
                    overflowY: 'scroll',
                }}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {tags.map(([tag]) => (
                                <TableCell
                                    key={tag}
                                    sx={{ paddingBlock: '.75rem', bgcolor: '#fafafa' }}
                                >
                                    {tag}
                                </TableCell>
                            ))}
                            <TableCell
                                sx={{ paddingBlock: '.75rem', bgcolor: '#fafafa' }}
                            >
                                Acciones
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entities.map(entity => (
                            <TableRow
                                key={entity[idKey]}
                                onClick={() => onRowClick(entity)}
                                sx={{
                                    '&:hover': { bgcolor: '#F3F3F3' },
                                    '&:last-child': { borderBottomColor: 'transparent' },
                                }}
                            >
                                {tags.map(([tag, key]) => (
                                    <TableCell key={tag + entity[idKey]}>
                                        {entity[key]}
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <Tooltip title='Borrar'>
                                        <DeleteIcon
                                            onClick={e => {
                                                e.stopPropagation();
                                                onDeleteEntity(entity);
                                            }}
                                        />
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {footer}
        </Paper>
    );
}

export type EntityTableType<
    Entity extends BaseEntity<IdKey>,
    IdKey extends string | number | symbol
> = typeof EntityTable<Entity, IdKey>;

export default EntityTable;
