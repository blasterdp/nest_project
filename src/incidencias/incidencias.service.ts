import { Injectable } from '@nestjs/common';

@Injectable()
export class IncidenciasService {
    getIncidencia() {
        return 'Listado de incidencias'
    }

    setIncidencia() {
        return 'Insertar una incidencia'
    }
}
