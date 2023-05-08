import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { NeighborhoodsService } from '../components/neighborhoods/neighborhoods.service';
import { ERRORS } from '../constants/errors';

@Injectable()
export class RequestedAlreadyGuard implements CanActivate {
	
	constructor(private neighborhoodService: NeighborhoodsService) {
	}
	async canActivate(context: ExecutionContext): Promise<any> {
		const req = context.switchToHttp().getRequest();
		const neighborhoodId = req.params.neighborhoodId;
		
		if (!neighborhoodId) return false;
		const isRequested = await this.neighborhoodService.getNeighborhoodInviteByIdAndUserId(neighborhoodId, req.user._id);
		
		if (isRequested) throw new BadRequestException({message: ERRORS.REQUEST_ALREADY_SENT});
		
		return true;
	}
}
