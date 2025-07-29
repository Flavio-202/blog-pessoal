import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DevService } from './data/services/services/dev.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      useClass: DevService,
      imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
