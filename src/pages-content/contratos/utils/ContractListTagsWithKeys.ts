import { Path } from 'react-hook-form';
import Contract from '../../../entities/Contract.entity';

export const ContractListTagsWithKeysAndTabs: {
    [key: string]: [string, keyof Contract & Path<Contract>][];
} = {
    General: [['Número de Contrato', 'id']],
    'Remuneración Convenida': [
        ['Periodo Ordinario de Pago', 'periodoOrdinarioPago'],
        ['Fecha Asignada', 'fechaAsignada'],
        ['Monto Sueldo Mensual', 'montoSueldoMensual'],
        ['Días para el Cálculo de Jornal', 'diasCalculoJornal'],
        ['Monto Jornal Diario', 'montoJornalDiario'],
        ['Monto por hora', 'montoPorHora'],
    ],
    Modalidades: [
        ['Clase de Trabajo a Realizar', 'claseTrabajoARealizar'],
        ['Lugar de Prestación', 'lugarPrestacion'],
        ['Lugar de Prestación Personalizado', 'lugarPrestacionPersonalizado'],
    ],
    'Forma de Contrato': [
        ['Forma de Contrato', 'formaContrato'],
        ['Período de Prueba (en días)', 'periodoPrueba'],
        ['Observaciones', 'observacionesFormaContrato'],
    ],
    'Plazo del Contrato': [
        ['Plazo del Contrato', 'plazoContrato'],
        ['Fecha de Inicio de Tareas', 'fechaInicioTareas'],
        ['Fecha de ingreso a la empresa', 'fechaIngresoEmpresa'],
    ],
    'La Jornada': [
        ['Jornada de Trabajo', 'jornadaTrabajo'],
        ['Horario por la mañana desde', 'horarioMañanaDesde'],
        ['Horario por la mañana hasta', 'horarioMañanaHasta'],
        ['Horario por la tarde desde', 'horarioTardeDesde'],
        ['Horario por la tarde hasta', 'horarioTardeHasta'],
        ['Horario los sábados mañana desde', 'horarioSabadosDesde'],
        ['Horario los sábados mañana hasta', 'horarioSabadosHasta'],
        ['Horario los domingos mañana desde', 'horarioDomingosDesde'],
        ['Horario los domingos mañana hasta', 'horarioDomingosHasta'],
    ],
    Beneficios: [
        ['Alimentación Gs.', 'alimentacionGs'],
        ['Habilitación Gs.', 'habilitacionGs'],
        ['Uniforme Gs.', 'uniformeGs'],
    ],
    Materiales: [
        ['Cantidad de Materiales del Empleador', 'cantidadMaterialesEmpleador'],
        ['Calidad de Materiales del Empleador', 'calidadMaterialesEmpleador'],
        [
            'Estado y Condiciones de Entrega de los Materiales del Empleador',
            'estadoYCondicionesDeEntregaMaterialesEmpleador',
        ],
        [
            'Observaciones de los Materiales del Empleador',
            'observacionesMaterialesEmpleador',
        ],
        ['Cantidad de Materiales del Trabajador', 'cantidadMaterialesTrabajador'],
        ['Calidad de Materiales del Trabajador', 'calidadMaterialesTrabajador'],
        ['% Comisión de Materiales del Trabajador', 'comisionMaterialesTrabajador'],
        [
            'Estado y Condiciones de Entrega de Materiales del Trabajador',
            'estadoYCondicionesDeEntregaMaterialesTrabajador',
        ],
        [
            'Observaciones de Materiales del Trabajador',
            'observacionesMaterialesTrabajador',
        ],
    ],
    Personalizado: [
        ['Campos a Mano', 'camposAMano'],
        ['Observaciones de Campos a Mano', 'observacionesCamposAMano'],
    ],
};
