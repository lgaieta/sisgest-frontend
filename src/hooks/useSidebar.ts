import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useClientSelector from './useClientSelector';

const useSidebar = () => {
    const [client, setClient] = useClientSelector();
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => setOpen(false), [router.pathname]);

    return { open, setOpen, client, setClient };
};

export default useSidebar;
