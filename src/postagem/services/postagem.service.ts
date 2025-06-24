import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { postagem } from '../entities/postagem.entity';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(postagem)
    private postagemRepository: Repository<postagem>,
  ) {}

  async findAll(): Promise<postagem[]> {
    return await this.postagemRepository.find();
  }

  async findByID(id: number): Promise<postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: {
        id
      }
    });

    if (!postagem)
      throw new HttpException('postagem não encotrada!', HttpStatus.NOT_FOUND);

    return postagem;
  }

  async findAllByTitulo(titulo: string): Promise<postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      }
    })
  }

  async create(postagem: postagem): Promise<postagem> {
    return await this.postagemRepository.save(postagem);
  }

  async Update(postagem: postagem): Promise<postagem> {
    await this.findByID(postagem.id)
    return await this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findByID(id)
    return await this.postagemRepository.delete(id)
  }
}
