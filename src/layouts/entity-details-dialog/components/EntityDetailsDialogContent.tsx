import { Box, Typography, TextField } from '@mui/material';
import { Path, UseFormRegister } from 'react-hook-form';
import DetailsDialogStyles from '../styles/EntityDetailsDialog.styles';

const { DetailsContentStyles } = DetailsDialogStyles;

const checkValue = (value: unknown): string | number | null =>
    typeof value === 'string' || typeof value === 'number' ? value : null;

type Props<Entity> = {
    isEditable: boolean;
    tags: [string, keyof Entity & Path<Entity>][];
    entity: Entity | null;
    register: UseFormRegister<Entity>;
};

function EntityDetailsDialogContent<Entity>(props: Props<Entity>) {
    const { tags, isEditable, entity, register } = props;

    return (
        <Box sx={DetailsContentStyles}>
            {tags.map(([tag, key]) => (
                <Box key={tag}>
                    <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
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
                        <Typography variant='body1'>{checkValue(entity[key])}</Typography>
                    )}
                </Box>
            ))}
        </Box>
    );
}

export default EntityDetailsDialogContent;
