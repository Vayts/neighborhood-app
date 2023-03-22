import { Injectable } from '@nestjs/common';
import { UserDocument } from '../../schemas/user.schema';
import { UserService } from '../user/user.service';
import { InvalidDataException } from '../../exception/invalidData.exception';
import * as bcrypt from 'bcryptjs';
import { TokenService } from '../token/token.service';
import { SimpleUserDto } from 'src/dto/user.dto';
import { ERRORS } from '../../constants/errors';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}
  async login(res, dto) {
    const user = await this.validateUser(dto);
    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.updateToken(user._id, tokens.refresh);
    res.cookie('arvalesa', tokens.refresh, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
    const userDTO = new SimpleUserDto(user);
    return { ...userDTO, token: tokens.access };
  }

  async validateUser(dto) {
    const user: UserDocument = await this.userService.getUserByLogin(dto.login);
    try {
      const isPasswordCorrect = await bcrypt.compare(
        dto.password,
        user.password,
      );
      if (user && isPasswordCorrect) {
        return user;
      }
    } catch {
      throw new InvalidDataException({ message: ERRORS.WRONG_LOGIN_PASSWORD });
    }
    throw new InvalidDataException({ message: ERRORS.WRONG_LOGIN_PASSWORD });
  }
}