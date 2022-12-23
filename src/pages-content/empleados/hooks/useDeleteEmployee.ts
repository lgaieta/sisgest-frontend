import { useMutation } from 'react-query';
import deleteEmployee from '../usecases/deleteEmployee';

const useDeleteEmployee = () => useMutation(deleteEmployee);

export default useDeleteEmployee;
