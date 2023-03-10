import Contract from '../../../entities/Contract.entity';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getContractsFromRepository = async (): Promise<Contract[]> => {
    await timeout(3000);
    return [
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
        {
            id: 9214312439124,
            id_empleado: 9214312439124,
            periodoOrdinarioPago: 'Dato de ejemplo',
            fechaAsignada: 'Dato de ejemplo',
            montoSueldoMensual: 9214312439124,
            montoJornalDiario: 9214312439124,
            montoPorHora: 9214312439124,
            diasCalculoJornal: 9214312439124,
            claseTrabajoARealizar: 'Dato de ejemplo',
            lugarPrestacion: 'Dato de ejemplo',
            lugarPrestacionPersonalizado: 'Dato de ejemplo',
            formaContrato: 'Dato de ejemplo',
            periodoPrueba: 9214312439124,
            observacionesFormaContrato: 'Dato de ejemplo',
            plazoContrato: 'Dato de ejemplo',
            fechaInicioTareas: 'Dato de ejemplo',
            fechaIngresoEmpresa: 'Dato de ejemplo',
            jornadaTrabajo: 'Dato de ejemplo',
            horarioMañanaDesde: 9214312439124,
            horarioMañanaHasta: 9214312439124,
            horarioTardeDesde: 9214312439124,
            horarioTardeHasta: 9214312439124,
            horarioSabadosDesde: 9214312439124,
            horarioSabadosHasta: 9214312439124,
            horarioDomingosDesde: 9214312439124,
            horarioDomingosHasta: 9214312439124,
            alimentacionGs: 'Dato de ejemplo',
            habilitacionGs: 'Dato de ejemplo',
            uniformeGs: 'Dato de ejemplo',
            cantidadMaterialesEmpleador: 9214312439124,
            calidadMaterialesEmpleador: 'Dato de ejemplo',
            estadoYCondicionesDeEntregaMaterialesEmpleador: 'Dato de ejemplo',
            observacionesMaterialesEmpleador: 'Dato de ejemplo',
            cantidadMaterialesTrabajador: 9214312439124,
            calidadMaterialesTrabajador: 'Dato de ejemplo',
            comisionMaterialesTrabajador: 9214312439124,
            estadoYCondicionesDeEntregaMaterialesTrabajador: 'Dato de ejemplo',
            observacionesMaterialesTrabajador: 'Dato de ejemplo',
            camposAMano: 'Dato de ejemplo',
            observacionesCamposAMano: 'Dato de ejemplo',
        },
    ];
};

export default getContractsFromRepository;
