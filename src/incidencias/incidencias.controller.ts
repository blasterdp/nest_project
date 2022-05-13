import { Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { IncidenciasService } from './incidencias.service';

@Controller('incidencias')
export class IncidenciasController {

    constructor(private incidenciasService: IncidenciasService) { }

    @Get()
    getHello(): string {
        return this.incidenciasService.getIncidencia();
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files', 3, {
        dest: './uploads'
    }))
    uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        console.log(files);

    }

}
