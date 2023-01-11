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
import { ReactNode, useRef, useState } from 'react';
import { Path, useForm } from 'react-hook-form';
import DetailsDialogStyles from './EntityDetailsDialog.styles';

const { DetailsContainerStyles } = DetailsDialogStyles;

type BaseEntity = Record<string, unknown>;

type EntityDetailsDialogProps<Entity extends BaseEntity> = {
    title: (entity: Entity) => ReactNode;
    isOpen: boolean;
    entity: Entity | null;
    tags: [string, keyof Entity & Path<Entity>][];
    onEditButtonClick?: () => void;
    onDeleteButtonClick: (entity: Entity) => void;
    onCloseButtonClick: () => void;
    onDialogClose: () => void;
    onFormSubmit: (entity: Entity) => void;
};

const checkValue = (value: unknown): string | number | null =>
    typeof value === 'string' || typeof value === 'number' ? value : null;

function EntityDetailsDialog<Entity extends BaseEntity>(
    props: EntityDetailsDialogProps<Entity>
) {
    const {
        title,
        isOpen,
        onEditButtonClick = null,
        onDeleteButtonClick,
        onCloseButtonClick,
        onDialogClose,
        onFormSubmit,
        entity,
        tags,
    } = props;

    const { register, handleSubmit } = useForm<Entity>();
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const editInputRef = useRef<HTMLInputElement>(null);

    if (!entity) return null;

    return (
        <Dialog open={isOpen} onClose={onDialogClose} fullWidth maxWidth='md'>
            <form onSubmit={handleSubmit(data => onFormSubmit({ ...entity, ...data }))}>
                <DialogTitle>
                    <Typography variant='h4' sx={{ fontWeight: '700' }}>
                        {checkValue(title(entity))}
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
                                        defaultValue={entity[key]}
                                        hiddenLabel
                                        {...register(key)}
                                    />
                                ) : (
                                    <Typography variant='body1'>
                                        {checkValue(entity[key])}
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
                            if (isEditable && editInputRef.current)
                                editInputRef?.current.click();
                            setIsEditable(prev => !prev);
                        }}
                    >
                        {isEditable ? 'Guardar' : 'Editar'}
                    </Button>
                    <input type='submit' style={{ display: 'none' }} ref={editInputRef} />
                    <Button
                        variant='outlined'
                        color='error'
                        onClick={() => onDeleteButtonClick(entity)}
                    >
                        Borrar
                    </Button>
                    <Button onClick={onCloseButtonClick}>Cerrar</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export type EntityDetailsDialogType<Entity extends BaseEntity> =
    typeof EntityDetailsDialog<Entity>;

export default EntityDetailsDialog;
