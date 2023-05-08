import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { NeighborhoodsService } from './neighborhoods.service';
import { JwtAuthGuard } from '../../guards/jwtAuth.guard';
import { RequestedAlreadyGuard } from '../../guards/requestedAlready.guard';
import { AlreadyInNeighborhoodGuard } from '../../guards/alreadyInNeighborhood.guard';

@Controller('neighborhoods')
export class NeighborhoodsController {
	
	constructor(private neighborhoodsService: NeighborhoodsService) {}
	
	@UseGuards(JwtAuthGuard)
	@Get('/all')
	getUserNeighborhoods(@Req() req: Request) {
		return this.neighborhoodsService.getUserNeighborhoods(req);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get('/search/:title')
	getNeighborhoodsByTitle(@Req() req: Request, @Param('title') title) {
		return this.neighborhoodsService.getNeighborhoodsByTitle(req, title);
	}
	
	@UseGuards(JwtAuthGuard, RequestedAlreadyGuard, AlreadyInNeighborhoodGuard)
	@Get('/member_request/:neighborhoodId')
	sendMemberRequest(@Req() req: Request, @Param('neighborhoodId') neighborhoodId) {
		return this.neighborhoodsService.sendMemberRequest(req, neighborhoodId);
	}
}
