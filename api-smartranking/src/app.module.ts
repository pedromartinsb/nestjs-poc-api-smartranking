import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.jbmtn.mongodb.net/smartranking?retryWrites=true&w=majority',
    ),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
