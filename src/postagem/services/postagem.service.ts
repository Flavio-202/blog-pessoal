import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
