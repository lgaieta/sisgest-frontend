import EntityDetailsDialog, {
    type EntityDetailsDialogProps,
} from './EntityDetailsDialog';
import { Tabs, Tab } from '@mui/material';
import EntityDetailsDialogContent from './components/EntityDetailsDialogContent';
import { useState } from 'react';
import { Path } from 'react-hook-form';
import blueGrey from '@mui/material/colors/blueGrey';

type EntityTagsWithTabs<Entity extends Record<string, unknown>> = {
    [key: string]: [string, keyof Entity & Path<Entity>][];
};

const EntityDetailsDialogWithTabs = <Entity extends Record<string, unknown>>(
    props: Omit<EntityDetailsDialogProps<Entity>, 'tags'> & {
        tags: EntityTagsWithTabs<Entity>;
    }
) => {
    const { tags, entity, ...restProps } = props;
    const [selectedTabName, setSelectedTabName] = useState<string>('General');
    const [indexTab, setIndexTab] = useState<number>(0);

    const handleChange = (_, newIndex: number) => {
        setSelectedTabName(Object.keys(tags)[newIndex]);
        setIndexTab(newIndex);
    };

    return (
        <EntityDetailsDialog<Entity>
            body={hookProps => (
                <>
                    <Tabs
                        variant='scrollable'
                        scrollButtons='auto'
                        onChange={handleChange}
                        value={indexTab}
                        sx={{ bgcolor: blueGrey[50], borderRadius: '.5rem', mb: '1rem' }}
                    >
                        {Object.entries(tags).map(([tab]) => (
                            <Tab key={tab} label={tab} />
                        ))}
                    </Tabs>
                    <EntityDetailsDialogContent<Entity>
                        {...hookProps}
                        tags={tags[selectedTabName]}
                        entity={entity}
                    />
                </>
            )}
            entity={entity}
            {...restProps}
            tags={[]}
        />
    );
};

export default EntityDetailsDialogWithTabs;
