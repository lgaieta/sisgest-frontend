import { useMutation } from 'react-query';
import updateEmployee from '../usecases/updateEmployee';

const useUpdateEmployee = () => useMutation(updateEmployee);

export default useUpdateEmployee;
