import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { NeighborhoodsService } from '../components/neighborhoods/neighborhoods.service';
import { ERRORS } from '../constants/errors';

@Injectable()
export class AlreadyInNeighborhoodGuard implements CanActivate {
	
	constructor(private neighborhoodService: NeighborhoodsService) {
	}
	async canActivate(context: ExecutionContext): Promise<any> {
		const req = context.switchToHttp().getRequest();
		const neighborhoodId = req.params.neighborhoodId;
		
		if (!neighborhoodId) return false;
		const isInNeighborhood = await this.neighborhoodService.getNeighborhoodByIdAndUserId(neighborhoodId, req.user._id);
		
		if (isInNeighborhood) throw new BadRequestException({message: ERRORS.USER_ALREADY_IN_NEIGHBORHOOD});
		
		return true;
	}
}
