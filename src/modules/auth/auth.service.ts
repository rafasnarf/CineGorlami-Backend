import { forwardRef, Injectable, Inject } from '@nestjs/common';
import { UserAuthService } from '../users/services/user.auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserAuthService))
    private userAuthService: UserAuthService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userAuthService.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      acess_token: this.jwtService.sign(payload),
    };
  }
}
