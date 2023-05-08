import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Neighborhood, NeighborhoodDocument } from '../../schemas/neighborhood.schema';
import { Neighborhood_UserDocument, Neighborhood_Users } from '../../schemas/neighborhood_user.schema';
import { Neighborhood_Invites, Neighborhood_InvitesDocument } from '../../schemas/neighborhood_invites.schema';

@Injectable()
export class NeighborhoodsService {
  constructor(
		@InjectModel(Neighborhood.name) private neighborhoodModel: Model<NeighborhoodDocument>,
		@InjectModel(Neighborhood_Users.name) private neighborhood_UserModel: Model<Neighborhood_UserDocument>,
		@InjectModel(Neighborhood_Invites.name) private neighborhood_InviteModel: Model<Neighborhood_InvitesDocument>
	) {}
	
	getUserNeighborhoods(req) {
		return this.neighborhoodModel.aggregate([
			{
				$lookup: {
					from: "neighborhood_users",
					localField: "_id",
					foreignField: "neighborhood_id",
					as: "usersInNeighborhoods"
				}
			},
			{
				$lookup: {
					from: "users",
					localField: "usersInNeighborhoods.user_id",
					foreignField: "_id",
					as: "usersData"
				}
			},
			{
				$addFields: {
					'user_ids': "$usersInNeighborhoods.user_id",
				}
			},
			{$match: {user_ids: {'$in': [new mongoose.Types.ObjectId(req.user._id)]} } },
			{
				$addFields: {
					members: "$usersData",
				}
			},
			{
				$project: {
					title: 1,
					description: 1,
					_id: 1,
					type: 1,
					neighborhoods: 1,
					members: 1,
				}
			},

		])
	}
	
	getNeighborhoodByIdAndUserId(neighborhoodId, userId) {
		return this.neighborhood_UserModel.findOne({
			user_id: new mongoose.Types.ObjectId(userId),
			neighborhood_id: new mongoose.Types.ObjectId(neighborhoodId),
		})
	}
	
	getNeighborhoodInviteByIdAndUserId(neighborhoodId, userId) {
		return this.neighborhood_InviteModel.findOne({
			user_id: new mongoose.Types.ObjectId(userId),
			neighborhood_id: new mongoose.Types.ObjectId(neighborhoodId),
		})
	}
	
	async getNeighborhoodsByTitle(req, title) {
		const userNeighborhoods = await this.neighborhood_UserModel.aggregate([
			{
				$match: { user_id: new mongoose.Types.ObjectId(req.user._id) }
			},
			{
				$project: {
					neighborhood_id: { $toString: "$neighborhood_id" }
				}
			},
		]).then((data) => {
			return data.map((item) => {
				return item.neighborhood_id;
			})
		})
		const userInvites = await this.neighborhood_InviteModel.aggregate([
			{
				$match: { user_id: new mongoose.Types.ObjectId(req.user._id) }
			},
			{
				$project: {
					neighborhood_id: { $toString: "$neighborhood_id" }
				}
			},
		]).then((data) => {
			return data.map((item) => {
				return item.neighborhood_id;
			})
		})
		
		const searchResult = await this.neighborhoodModel.aggregate([
			{
				$lookup: {
					from: "neighborhood_users",
					localField: "_id",
					foreignField: "neighborhood_id",
					as: "usersInNeighborhoods"
				}
			},
			{
				$lookup: {
					from: "users",
					localField: "usersInNeighborhoods.user_id",
					foreignField: "_id",
					as: "usersData"
				}
			},
			{
				$addFields: {
					'user_ids': "$usersInNeighborhoods.user_id",
				}
			},
			{$match: { title: { $regex: new RegExp(title, 'i') } } },
			{
				$addFields: {
					'members': "$usersData",
				}
			},
			{
				$project: {
					title: 1,
					description: 1,
					_id: 1,
					type: 1,
					neighborhoods: 1,
					status: 1,
					members: 1,
				}
			}
		]);
		
		return searchResult.map((item) => {
			if (userNeighborhoods.includes(item._id.toString())) return {...item, status: 2}
			if (userInvites.includes(item._id.toString())) return  {...item, status: 1}
			return {...item, status: 0}
		})
	}
	
	sendMemberRequest(req, neighborhoodId) {
		
		return this.neighborhood_InviteModel.insertMany([{
			neighborhood_id: new mongoose.Types.ObjectId(neighborhoodId),
			user_id: new mongoose.Types.ObjectId(req.user._id),
			status: false,
		}])
	}
}
