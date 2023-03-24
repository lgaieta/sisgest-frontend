import LoginData from '../utils/LoginData';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const loginUserOnRepository = async (data: LoginData) => {
    await timeout(3000);
    console.log(data);
    throw new Error('Error');
};

export default loginUserOnRepository;
