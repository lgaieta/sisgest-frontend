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
};

function EntityTable<
    Entity extends BaseEntity<IdKey>,
    IdKey extends string | number | symbol
>(props: EntityTableProps<Entity, IdKey>) {
    const { entities, onDeleteEntity, onRowClick, tags, idKey } = props;

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
                    {entities.map(entity => (
                        <TableRow
                            key={entity[idKey]}
                            onClick={() => onRowClick(entity)}
                            sx={{
                                '&:hover': { bgcolor: '#F3F3F3' },
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
    );
}

export default EntityTable;
