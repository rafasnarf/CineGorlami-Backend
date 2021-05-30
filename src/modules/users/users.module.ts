import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserAuthService } from './services/user.auth.service';
import { UsersController } from './controllers/users.controller';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './../auth/constants';

@Module({
  imports: [
    forwardRef(() => AuthService),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UsersService, UserAuthService],
  controllers: [UsersController],
  exports: [UserAuthService],
})
export class UsersModule {}
