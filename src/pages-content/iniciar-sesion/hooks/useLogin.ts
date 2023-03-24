import { useMutation } from 'react-query';
import adaptLoginData from '../adapters/adaptLoginData';
import loginUserOnRepository from '../services/loginUserOnRepository';
import LoginData from '../utils/LoginData';

const useLogin = () =>
    useMutation(
        async (data: LoginData) => await loginUserOnRepository(adaptLoginData(data))
    );

export default useLogin;
