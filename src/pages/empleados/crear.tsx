import { useForm } from 'react-hook-form';
import Employee from '../../entities/Employee.entity';
import Main from '../../layouts/Main';

type EmployeeFormStructure = { names: Employee['names']; surnames: Employee['surnames'] };

function CrearEmpleadoPage() {
    const { register, handleSubmit } = useForm<EmployeeFormStructure>();

    return (
        <Main title='Crear empleado' hideHeader>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register('names')} />
                <input {...register('surnames')} />
                <input type='submit' />
            </form>
        </Main>
    );
}

export default CrearEmpleadoPage;
