import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../entities/usuario.entity";
import { Repository } from "typeorm";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";




@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
    ) {}

    async findByUsuario (usuario: string): Promise <Usuario | undefined>{
        return await this.usuarioRepository.findOne({
            where: {
                usuario: usuario
            }
        })
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findById (id: number): Promise <Usuario>{
        const usuario = await this.usuarioRepository.findOne({
            where: {
                id
            }
        });
        if (!usuario)
            throw new HttpException ('Usuario não encontrado!', HttpStatus.NOT_FOUND);
        return usuario;
    }

    async create (usuario: Usuario): Promise <Usuario>{
        const buscaUsuario = await this.findByUsuario(usuario.usuario);
        if (buscaUsuario)
            throw new HttpException("O usuario já existe!", H)
    }
}