import { Controller, Get, Post } from '@nestjs/common';
import { IncidenciasService } from './incidencias.service';

@Controller('incidencias')
export class IncidenciasController {

    constructor(private incidenciasService: IncidenciasService) { }

    @Get()
    getHello(): string {
        return this.incidenciasService.getIncidencia();
    }

    @Post()
    setHello(): string {
        return this.incidenciasService.setIncidencia();
    }
}
