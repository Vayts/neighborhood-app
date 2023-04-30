import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { NeighborhoodsService } from './neighborhoods.service';
import { JwtAuthGuard } from '../../guards/jwtAuth.guard';

@Controller('neighborhoods')
export class NeighborhoodsController {
	
	constructor(private neighborhoodsService: NeighborhoodsService) {}
	
	@UseGuards(JwtAuthGuard)
	@Get('/all')
	getUserNeighborhoods(@Req() req: Request) {
		return this.neighborhoodsService.getUserNeighborhoods(req);
	}
	
	@Get('/search/:title')
	getNeighborhoodsByTitle(@Req() req: Request, @Param('title') title) {
		return this.neighborhoodsService.getNeighborhoodsByTitle(req, title);
	}
}
