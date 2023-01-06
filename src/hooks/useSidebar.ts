import { useState } from 'react';
import useClientSelector from './useClientSelector';

const useSidebar = () => {
    const [client, setClient] = useClientSelector();
    const [open, setOpen] = useState<boolean>(false);

    return { open, setOpen, client, setClient };
};

export default useSidebar;
