import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { NeighborhoodsModule } from '../neighborhoods/neighborhoods.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@users.fdv5b.mongodb.net/neighborhood',
    ),
    AuthModule,
	  NeighborhoodsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
