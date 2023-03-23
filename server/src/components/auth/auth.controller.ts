import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { CreateUserDto } from '../../dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(
    @Res({ passthrough: true }) response: Response,
    @Body() dto: LoginUserDto,
  ) {
    return this.authService.login(response, dto);
  }

  @Post('/register')
  register(
    @Res({ passthrough: true }) response: Response,
    @Body() dto: CreateUserDto,
  ) {
    return this.authService.register(response, dto);
  }

  @Get('/refresh')
  refresh(@Req() request: Request) {
    return this.authService.refreshUser(request);
  }
}
