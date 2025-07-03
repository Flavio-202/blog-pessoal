import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';
import { TemaService } from '../../tema/sevices/tema.service';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
    private temaService: TemaService,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find();
  }

  async findByID(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: {
        id,
      },
    });

    if (!postagem)
      throw new HttpException('postagem não encotrada!', HttpStatus.NOT_FOUND);

    return postagem;
  }

  async findAllByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        tema: true,
        usuario: true,
      },
    });
  }

  async create(postagem: Postagem): Promise<Postagem> {
    await this.temaService.findById(postagem.tema.id);
    return await this.postagemRepository.save(postagem);
  }

  async Update(postagem: Postagem): Promise<Postagem> {
    await this.findByID(postagem.id);
    await this.temaService.findById(postagem.tema.id);
    return await this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findByID(id);
    return await this.postagemRepository.delete(id);
  }
}
