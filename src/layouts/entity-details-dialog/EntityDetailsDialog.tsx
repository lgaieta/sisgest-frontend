import {
    Dialog,
    DialogTitle,
    Typography,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';
import { ReactNode } from 'react';
import { Path } from 'react-hook-form';
import EntityDetailsDialogContent from './components/EntityDetailsDialogContent';
import useEntityDetailsDialog from './hooks/useEntityDetailsDialog';

type BaseEntity = Record<string, unknown>;

export type EntityDetailsDialogProps<Entity extends BaseEntity> = {
    title: (entity: Entity) => ReactNode;
    isOpen: boolean;
    entity: Entity | null;
    tags: [string, keyof Entity & Path<Entity>][];
    onEditButtonClick?: () => void;
    onDeleteButtonClick: (entity: Entity) => void;
    onCloseButtonClick: () => void;
    onDialogClose: () => void;
    onFormSubmit: (entity: Entity) => void;
    header?: (hookProps: ReturnType<typeof useEntityDetailsDialog<Entity>>) => ReactNode;
    body?: (hookProps: ReturnType<typeof useEntityDetailsDialog<Entity>>) => ReactNode;
    footer?: (hookProps: ReturnType<typeof useEntityDetailsDialog<Entity>>) => ReactNode;
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
        header,
        body,
        footer,
    } = props;

    const hookProps = useEntityDetailsDialog<Entity>();
    const { register, handleSubmit, isEditable, setIsEditable, editInputRef } = hookProps;

    if (!entity) return null;

    return (
        <Dialog open={isOpen} onClose={onDialogClose} fullWidth maxWidth='md'>
            <form onSubmit={handleSubmit(data => onFormSubmit({ ...entity, ...data }))}>
                <DialogTitle>
                    {header ? (
                        header(hookProps)
                    ) : (
                        <Typography variant='h4' sx={{ fontWeight: '700' }}>
                            {checkValue(title(entity))}
                        </Typography>
                    )}
                </DialogTitle>
                <DialogContent dividers>
                    {body ? (
                        body(hookProps)
                    ) : (
                        <EntityDetailsDialogContent<Entity>
                            tags={tags}
                            isEditable={isEditable}
                            entity={entity}
                            register={register}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    {footer ? (
                        footer(hookProps)
                    ) : (
                        <>
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
                            <input
                                type='submit'
                                style={{ display: 'none' }}
                                ref={editInputRef}
                            />
                            <Button
                                variant='outlined'
                                color='error'
                                onClick={() => onDeleteButtonClick(entity)}
                            >
                                Borrar
                            </Button>
                            <Button onClick={onCloseButtonClick}>Cerrar</Button>
                        </>
                    )}
                </DialogActions>
            </form>
        </Dialog>
    );
}

export type EntityDetailsDialogType<Entity extends BaseEntity> =
    typeof EntityDetailsDialog<Entity>;

export default EntityDetailsDialog;
