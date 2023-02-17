import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

const useEntityDetailsDialog = <Entity extends object>() => {
    const { register, handleSubmit } = useForm<Entity>();
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const editInputRef = useRef<HTMLInputElement>(null);

    return {
        register,
        handleSubmit,
        isEditable,
        setIsEditable,
        editInputRef,
    };
};

export default useEntityDetailsDialog;
