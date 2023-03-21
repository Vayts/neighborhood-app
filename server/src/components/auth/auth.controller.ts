import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../../dto/loginUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(
    @Res({ passthrough: true }) response: Response,
    @Body() dto: LoginUserDto,
  ) {
    console.log('asdasd');
    return this.authService.login(response, dto);
  }
}
