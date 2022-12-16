import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { postEmployee } from '../../../services/postEmployee';
import { CreateEmployeeFormStructure } from './CreateEmployeeFormStructure.type';
import { CreateEmployeeResolver } from './CreateEmployeeResolver';

export const useCreateEmployeeForm = () => {
    // Form handling
    const { formState, register, handleSubmit } = useForm<CreateEmployeeFormStructure>({
        resolver: CreateEmployeeResolver,
    });

    const router = useRouter();

    // Async logic handling
    const { mutate, isLoading, isError } = useMutation(
        async (data: CreateEmployeeFormStructure) => postEmployee(data),
        { onSuccess: () => router.push('/empleados') }
    );

    return {
        formState,
        register,
        handleSubmit,
        createEmployee: mutate,
        isLoading,
        isError,
    };
};
