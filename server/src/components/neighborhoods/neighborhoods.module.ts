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
import { Neighborhood_Invites, Neighborhood_InvitesSchema } from '../../schemas/neighborhood_invites.schema';

@Module({
  imports: [
    JwtModule,
    MongooseModule.forFeature([
      { name: Neighborhood.name, schema: NeighborhoodSchema },
	    { name: Neighborhood_Users.name, schema: Neighborhood_UserSchema },
	    { name: Neighborhood_Invites.name, schema: Neighborhood_InvitesSchema },
    ]),
  ],
  controllers: [NeighborhoodsController],
  providers: [NeighborhoodsService],
})
export class NeighborhoodsModule {}
