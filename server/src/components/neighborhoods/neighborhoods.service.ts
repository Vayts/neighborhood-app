import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Neighborhood, NeighborhoodDocument } from '../../schemas/neighborhood.schema';
import { Neighborhood_UserDocument, Neighborhood_Users } from '../../schemas/neighborhood_user.schema';

@Injectable()
export class NeighborhoodsService {
  constructor(
		@InjectModel(Neighborhood.name) private neighborhoodModel: Model<NeighborhoodDocument>,
		@InjectModel(Neighborhood_Users.name) private neighborhood_UserModel: Model<Neighborhood_UserDocument>
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
					from: "neighborhood_users",
					let: { neighborhood_id: "$_id", user_id: new mongoose.Types.ObjectId(req.user._id) },
					pipeline: [
						{
							$match: {
								$expr: {
									$and: [
										{ $eq: ["$neighborhood_id", "$$neighborhood_id"] },
										{ $eq: ["$user_id", "$$user_id"] }
									]
								}
							}
						},
						{
							$project: {
								_id: 0,
								status: 1
							}
						}
					],
					as: "status"
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
					status: {
						$let: {
							vars: { s: { $arrayElemAt: ["$status", 0] } },
							in: "$$s.status"
						}
					},
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
					status: 1
				}
			},

		])
	}
	
	getNeighborhoodsByTitle(req, title) {
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
		])
		// return this.neighborhoodModel.find({ title: { $regex: new RegExp(title, 'i') } });
	}
}
