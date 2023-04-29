import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Neighborhood,
  NeighborhoodSchema,
} from '../../schemas/neighborhood.schema';
import { NeighborhoodsController } from './neighborhoods.controller';
import { NeighborhoodsService } from './neighborhoods.service';
import { Neighborhood_Users, Neighborhood_UserSchema } from '../../schemas/neighborhood_user.schema';

@Module({
  imports: [
    JwtModule,
    MongooseModule.forFeature([
      { name: Neighborhood.name, schema: NeighborhoodSchema },
	    { name: Neighborhood_Users.name, schema: Neighborhood_UserSchema },
    ]),
  ],
  controllers: [NeighborhoodsController],
  providers: [NeighborhoodsService],
})
export class NeighborhoodsModule {}
