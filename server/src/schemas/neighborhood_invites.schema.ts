import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { Neighborhood } from './neighborhood.schema';

export type Neighborhood_InvitesDocument = HydratedDocument<Neighborhood_Invites>;

@Schema()
export class Neighborhood_Invites {
	_id?: string;
	
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
	user_id: User;
	
	@Prop()
	role: string;
	
	@Prop()
	status: boolean;
	
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Neighborhood' })
	neighborhood_id: Neighborhood;
	
}


export const Neighborhood_InvitesSchema = SchemaFactory.createForClass(Neighborhood_Invites);
